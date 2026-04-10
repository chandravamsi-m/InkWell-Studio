/**
 * Inkwell Studio — Core Logic
 * Handles Dark Mode, Navbar scroll states, and Mobile Menu.
 */

function initAll() {
    if (window.inkwellInitialized) return;
    window.inkwellInitialized = true;

    initDarkMode();
    initNavbarScroll();
    initMobileDropdowns();
    initMobileMenu();
    
    // Initialize Lucide Icons (Wrapped to prevent blocking toggles)
    try {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    } catch (e) {
        console.warn("Lucide initialization failed, but toggles should still work.", e);
    }

    initDirectionToggle();
    initGalleryFilter();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

/**
 * Direction Toggle (RTL/LTR):
 * Persists the 'dir' attribute on <html>.
 */
function initDirectionToggle() {
    const htmlElement = document.documentElement;
    const dirToggles = document.querySelectorAll('#dir-toggle, #mobile-dir-toggle');
    const storageKey = 'inkwell-studio-direction';

    const getPreferredDir = () => {
        return localStorage.getItem(storageKey) || 'ltr';
    };

    const applyDir = (dir) => {
        htmlElement.setAttribute('dir', dir);
        localStorage.setItem(storageKey, dir);
        
        // Update all UI toggles
        dirToggles.forEach(toggle => {
            toggle.setAttribute('data-dir', dir);
        });
    };

    // Initial Apply
    applyDir(getPreferredDir());

    dirToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            applyDir(currentDir === 'rtl' ? 'ltr' : 'rtl');
        });
    });
}

/**
 * Dark Mode Strategy:
 * Reads system preference first, then localStorage.
 * Toggles 'dark' class on <html>.
 */
function initDarkMode() {
    const htmlElement = document.documentElement;
    const modeToggles = document.querySelectorAll('#mode-toggle, #mobile-mode-toggle');
    const storageKey = 'inkwell-theme-mode';

    const getPreferredMode = () => {
        const stored = localStorage.getItem(storageKey);
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyMode = (mode) => {
        if (mode === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        localStorage.setItem(storageKey, mode);
    };

    // Initial Apply
    applyMode(getPreferredMode());

    modeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            applyMode(isDark ? 'light' : 'dark');
        });
    });
}

/**
 * Navbar Scroll State:
 * Increases opacity and adds border after 80px scroll.
 */
function initNavbarScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile Menu Dropdowns:
 * Toggles 'active' class on dropdown content and icons.
 */
function initMobileDropdowns() {
    const toggles = document.querySelectorAll('[data-dropdown-toggle]');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = `dropdown-${toggle.getAttribute('data-dropdown-toggle')}`;
            const target = document.getElementById(targetId);
            const icon = toggle.querySelector('.dropdown-icon');
            
            if (target) {
                target.classList.toggle('active');
            }
            if (icon) {
                icon.classList.toggle('active');
            }
        });
    });
}

/**
 * Mobile Menu:
 * Handles hamburger toggle and overlay visibility.
 */
function initMobileMenu() {
    const hamburger = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-mobile-menu');

    if (!hamburger || !mobileMenu || !closeBtn) return;

    const openMenu = () => {
        mobileMenu.classList.add('active');
        document.body.classList.add('overflow-hidden');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        openMenu();
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
    });

    document.addEventListener('click', (e) => {
        const isOpen = mobileMenu.classList.contains('active');
        if (isOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Auto-close on resize to desktop (Prevents layout bugs)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeMenu();
        }
    });
}

/**
 * Inkwell Studio — Portfolio Filter Logic
 * Handles filtering of portfolio items via the Centered Editorial Filter Bar.
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('#portfolio-filters button[data-filter]');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (!filterButtons.length || !portfolioItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // Update Filter Button States
            filterButtons.forEach(btn => {
                btn.classList.remove('active-filter', 'text-secondary', 'border-b', 'border-secondary', 'pb-1');
                btn.classList.add('opacity-40');
            });
            button.classList.remove('opacity-40');
            button.classList.add('active-filter', 'text-secondary', 'border-b', 'border-secondary', 'pb-1');

            // Filter exhibits with Fade Effect
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('animate-fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animate-fade-in');
                }
            });
        });
    });
}


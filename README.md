# Inkwell Studio — HTML Template Blueprint

**Version:** 1.0.0
**Stack:** HTML · Tailwind CSS (CDN) · Vanilla JavaScript
**Status:** Blueprint / Pre-Development

---

## 1. Template Overview

| Field            | Detail                                                                 |
|------------------|------------------------------------------------------------------------|
| **Name**         | Inkwell Studio                                                          |
| **Category**     | Portfolio / Booking / Service-Based (Hybrid)                           |
| **Target Audience** | Independent tattoo artists, studio collectives, body art professionals |
| **Purpose**      | A dark, editorial-grade portfolio site that digitizes the pre-appointment consultation pipeline — from design request submission and reference image upload to deposit payment and aftercare delivery. |

The template serves two distinct audiences simultaneously: **prospective clients** who discover the artist's work and initiate the booking process, and **the artist/admin** who manages the consultation queue, approves requests, and tracks deposits — all without requiring an in-person visit before the first session.

---

## 2. Architecture Overview

The template is divided into three distinct zones. Each zone has its own visual weight, navigation context, and user role.

### Public Website
The public-facing marketing layer. Designed as a high-contrast, editorial portfolio that communicates the artist's identity, body of work, and consultation process. Optimized for discovery, trust-building, and funneling visitors into the booking flow. No authentication required.

### Client (User) Dashboard
A gated self-service portal accessible after account creation. Clients use this area to submit custom design requests with reference images, monitor the status of their consultation, pay or track deposit payments, and access their personalized aftercare instructions post-session. This is the digital equivalent of the pre-appointment paperwork and intake process.

### Admin Dashboard
A private management layer for the artist or studio manager. Provides a unified view of all incoming consultation requests, client profiles, deposit ledger, appointment pipeline, and content management for portfolio and aftercare assets. Enables the artist to approve or decline requests, communicate with clients, and manage their schedule — entirely through the browser.

---

## 3. Design Direction

### Visual Style
The template inherits from the **"Ink & Iron"** design system — "The Curated Monolith." Every layout decision is rooted in the philosophy that a screen is a physical exhibition space. The aesthetic is heavy, permanent, and typographically dominant. No rounded corners exist anywhere in the interface. Sections are delineated by background color shifts, never by 1px borders. Whitespace is used aggressively as a structural element.

The portfolio pages treat photography as architecture — full-bleed, high-contrast tattoo imagery functions as load-bearing walls that define section boundaries.

### Light & Dark Mode Strategy
This template is **dark-first**. The default experience is a deep charcoal environment (`#1c1b1b` base, `#fcf9f8` text) that reflects the studio's physical ambiance. Light mode is an inversion for accessibility and daytime legibility.

Dark mode is implemented exclusively via Tailwind's `dark:` utility classes. The `dark` class is applied to the `<html>` element and toggled by a Vanilla JS function that also persists user preference to `localStorage`. This strategy applies uniformly to all public pages and both dashboards.

The mode toggle button appears in the public navbar and the dashboard topbar. On first visit, the template detects the user's system preference via `window.matchMedia('(prefers-color-scheme: dark)')` and applies the appropriate mode before first paint to prevent flash.

### Tailwind Color System
All colors are defined as CSS custom properties in a `<style>` block within the `<head>` of each page, then referenced using Tailwind's `[color:var(--token)]` arbitrary value syntax or mapped via the Tailwind CDN config object.

| Role                  | Token Name               | Dark Mode Value | Light Mode Value |
|-----------------------|--------------------------|-----------------|------------------|
| Page Surface          | `--surface`              | `#1c1b1b`       | `#fcf9f8`        |
| Section Break         | `--surface-container`    | `#2a2929`       | `#f6f3f2`        |
| Footer / Utility      | `--surface-dim`          | `#111010`       | `#dcd9d9`        |
| Floating Elements     | `--surface-low`          | `#242323`       | `#ffffff`        |
| Primary Action        | `--primary`              | `#ffffff`       | `#000000`        |
| Primary Text On       | `--on-primary`           | `#000000`       | `#ffffff`        |
| Critical CTA          | `--secondary`            | `#b52619`       | `#b52619`        |
| Body Text             | `--on-surface`           | `#f0edec`       | `#1c1b1b`        |
| Secondary Text        | `--on-surface-variant`   | `#c4c7c7`       | `#444748`        |
| Ghost Border Fallback | `--outline-variant`      | `#c4c7c7`       | `#c4c7c7`        |

The "Blood Red" secondary (`#b52619`) is used only for the "Book Now" CTA and critical dashboard alerts. It is not used for decorative purposes.

### Typography
Two typefaces only. Both loaded from Google Fonts via `<link>` in the `<head>`.

**Newsreader** (Serif) — Used for all editorial, storytelling, and headline content. Applied at tight letter-spacing (`-0.02em`) on hero and display roles to create visual density. Weights: 400, 600, 700.

**Inter** (Sans-Serif) — Used for all functional interface text: navigation, labels, data, form fields, dashboard statistics, table content, and utility headers. All-caps + bold for section labels. Weights: 400, 500, 600, 700.

| Role         | Font        | Size       | Weight | Transform  | Tracking   |
|--------------|-------------|------------|--------|------------|------------|
| Display-LG   | Newsreader  | 3.5rem     | 700    | —          | -0.02em    |
| Headline-MD  | Newsreader  | 1.75rem    | 600    | —          | -0.01em    |
| Title-SM     | Inter       | 1rem       | 700    | uppercase  | 0.08em     |
| Body-MD      | Inter       | 0.875rem   | 400    | —          | normal     |
| Label-SM     | Inter       | 0.75rem    | 600    | uppercase  | 0.06em     |

---

## 4. Public Website Pages

All public pages share a unified navbar component and footer. Pages are linked via relative `href` paths. No build step required.

| File                   | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `index.html`           | Home 1 — Immersive hero, featured work, intro to the artist             |
| `index-2.html`         | Home 2 — Grid-led portfolio-forward alternative homepage                |
| `about.html`           | Artist story, philosophy, studio environment, press                     |
| `services.html`        | Tattoo styles offered, process explanation, pricing philosophy          |
| `portfolio.html`       | Full gallery with style-based filtering                                 |
| `portfolio-single.html`| Individual project detail: full images, style tags, client quote        |
| `consultation.html`    | Public-facing consultation process explainer + CTA to start booking     |
| `aftercare.html`       | Public aftercare resource page (general, non-personalized version)      |
| `contact.html`         | Studio location, contact form, social links, FAQ                        |
| `coming-soon.html`     | Pre-launch / maintenance holding page with email capture                |
| `404.html`             | Custom error page with navigation back to key sections                  |

---

## 5. Homepage Layouts

### Home 1 — `index.html` (Narrative Entry)
The editorial-first homepage. Structured as a long-form scrollable experience that tells the artist's story while building toward the booking CTA. Image and typography alternate dominance section by section.

**Sections:**
1. **Hero** — Full-viewport dark panel. Headline in Display-LG Newsreader. A single high-contrast tattoo photograph bleeds to the right edge. One "Book a Consultation" CTA button in Blood Red. No carousel, no slider.
2. **Manifesto Strip** — A narrow, full-width band using `surface-container`. Two or three sentences of the artist's philosophy in Headline-MD. Left-aligned. Massive left padding. No image.
3. **Selected Works** — Three works in an asymmetric grid: one large image (60% width) on the left, two stacked smaller images on the right. Caption typography overlaps the bottom edge of each image using negative margin.
4. **The Process** — Four numbered steps (Consultation → Design → Session → Aftercare) laid out horizontally on desktop, stacked vertically on mobile. Each step uses a large numeral in Display-LG as the visual anchor, with body copy beneath.
5. **Artist Profile** — Split layout: large portrait photograph flush left, biography text and credentials right. Includes a "Years of Experience," "Styles," and "Studio" data row in Inter Title-SM.
6. **Testimonials** — Two or three client quotes in Headline-MD Newsreader italic. No star ratings. No avatars. Pure typography, wide margins. Background shifts to `surface-dim`.
7. **Booking CTA Banner** — Full-width section, `surface-dim` background. Single centered headline + Blood Red "Start Your Consultation" button. Maximum whitespace above and below.
8. **Footer** — Four columns: Logo + tagline, Navigation links, Studio address + hours, Instagram grid preview (static placeholder images). Background: `surface-dim`.

### Home 2 — `index-2.html` (Portfolio-First Grid)
An alternative entry point for visitors who arrive primarily to browse work before reading about the artist. Grid-dominant. Less narrative, more visual density.

**Sections:**
1. **Minimal Hero** — Reduced height (60vh). Headline and sub-label only. No full-bleed image. Instead, the page immediately opens into the portfolio grid below, creating visual continuity.
2. **Portfolio Masonry Grid** — Twelve portfolio images in a three-column asymmetric layout. Images are sized variably (some span two rows) to create editorial rhythm. Filter tags (Fine Line, Black & Grey, Neo-Traditional, etc.) appear as chips above the grid.
3. **Horizontal Stats Bar** — Four statistics in a full-width strip: Years Active, Pieces Completed, Styles Offered, Cities Worked In. Inter Title-SM labels, Display-LG numerals.
4. **Styles Offered** — A list-based section. Each style (Fine Line, Blackwork, Japanese, etc.) occupies a row with `spacing-12` vertical gap. Style name in Headline-MD on the left, a short descriptor in Body-MD on the right. No divider lines.
5. **Press & Features** — Logo lockup of publications or media outlets that have featured the artist. Monochrome, aligned in a single horizontal row.
6. **Mini Booking Prompt** — Compact CTA block. Shorter than Home 1's. Leads with a direct question ("Ready to start your piece?") and the Blood Red button.
7. **Footer** — Identical to Home 1 footer for consistency.

---

## 6. Authentication Pages

All auth pages use a split-panel layout: left panel is a large full-height tattoo photograph, right panel contains the form. On mobile, the image collapses and only the form is shown.

| File                    | Purpose                                              |
|-------------------------|------------------------------------------------------|
| `login.html`            | Email + password login. Link to Sign Up and Forgot Password. |
| `signup.html`           | Name, email, password, confirm password. Terms checkbox. |
| `forgot-password.html`  | Email field only. Submission triggers confirmation message state. |
| `reset-password.html`   | New password + confirm new password. Token passed via URL param. |

**Form field style:** Bottom-border only (2px `--primary`). No box containers. On focus, border transitions to `--secondary` Blood Red. Labels animate upward to label-sm size above the field on focus/fill.

No third-party auth libraries. Vanilla JS handles client-side validation and inline error messaging.

---

## 7. Client (User) Dashboard Pages

The client dashboard is the core product differentiator of this template. It digitizes the entire pre-appointment pipeline.

| File                               | Purpose                                                                 |
|------------------------------------|-------------------------------------------------------------------------|
| `user-dashboard.html`              | Unified Client Workspace: overview, requests, payments, messages, etc.  |

### Key Feature: Multi-Step Consultation Request Form (`new-request.html`)
This is the most complex client-facing page. Implemented as a Vanilla JS step controller — no page reloads between steps. Progress is shown as a horizontal step indicator at the top.

**Step 1 — Style & Placement:** Checkboxes for tattoo style preference, body placement selector (illustrated body diagram as SVG), approximate size range.

**Step 2 — Design Brief:** Long-form textarea for design description, color preference (black & grey vs. color), reference artists or inspiration notes.

**Step 3 — Reference Images:** Drag-and-drop upload zone. Accepts JPG, PNG, PDF. Preview thumbnails render below the zone. Maximum 10 files. File size indicator per upload.

**Step 4 — Availability:** Date range picker (Vanilla JS, no library) for preferred session windows. Any scheduling notes.

**Step 5 — Review & Submit:** Summary card of all entered information across previous steps. Edit links back to each step. Submit button.

---

## 8. Admin Dashboard Pages

The admin area is accessible only to the artist or designated studio manager. It provides complete oversight of the consultation pipeline and studio operations.

| File                                | Purpose                                                                  |
|-------------------------------------|--------------------------------------------------------------------------|
| `admin-dashboard.html`              | Unified Admin Suite: overview, request queue, clients, payments, etc.   |

### Admin Request Actions (`admin/request-detail.html`)
The most operationally important admin page. Controls available:
- **Approve** — Moves request to "Approved" status, triggers deposit request notification to client.
- **Decline** — With optional reason message sent to client.
- **Request Revision** — Sends a message to the client asking for more information.
- **Mark Deposit Received** — Updates payment status in the deposit ledger.
- **Release Aftercare** — Assigns a pre-built aftercare template to the client's dashboard.

---

## 9. Navigation Structure

### Public Navbar
Fixed-position glassmorphism bar: `--surface-container-low` at 80% opacity with `backdrop-blur-[20px]`. Full-width. 0px border radius. No bottom border (background shift handles separation).

**Desktop Layout:**
- Left: Studio wordmark in Newsreader (linked to `index.html`)
- Center: Navigation links — Home (dropdown) | Portfolio | Services | About | Contact
- Right: "Book a Consultation" in Blood Red + Dark/Light mode toggle icon

**Home Dropdown:**
- Triggered on hover (desktop) and tap (mobile)
- Contains: Home 1, Home 2
- Arrow indicator (SVG chevron) rotates 180° on open via CSS `transition: transform 300ms ease`
- No rounded corners on the dropdown panel — sharp rectangular card with `--surface-container` background

**Mobile Layout:**
- Hamburger icon (three horizontal lines, 1.5px stroke SVG) on the right
- Full-screen overlay menu slides in from the right on activation
- All nav items stacked vertically with `spacing-12` gaps
- "Book a Consultation" button full-width at the bottom of the overlay

### Client Dashboard Sidebar
Fixed left sidebar on desktop (240px wide). Collapses to icon-only rail on tablet. Bottom sheet on mobile.

**Navigation Items:**
- Overview
- My Requests (with unread badge)
- Upload References
- Payments
- Aftercare
- Messages (with unread count badge)
- Profile
- Settings
- Logout

### Admin Dashboard Sidebar
Same structure as client sidebar, wider at 260px, with distinct section groupings.

**Navigation Sections:**
- **Overview** — Dashboard
- **Consultation** — Requests, Clients, Calendar
- **Finance** — Payments
- **Content** — Portfolio, Aftercare Templates
- **Communication** — Messages
- **System** — Settings, Logout

---

## 10. Component Library

All components are hand-coded in HTML with Tailwind utility classes. No component framework. No external component library.

### Navbar
See Navigation Structure above. Glassmorphism effect via Tailwind's `backdrop-blur` and `bg-opacity` utilities.

### Sidebar
Left-anchored nav with item states: default, hover (background shifts to `surface-container`), and active (left border in Blood Red `--secondary`, text shifts to `--on-surface`). Uses `<nav>` + `<ul>` semantic structure.

### Cards
**Portfolio Card** — No border, no shadow. Image fills the card. Title and style tag appear in an overlay at the bottom using absolute positioning with a gradient from transparent to `--surface`. 0px radius.

**Request Status Card** (Dashboard) — Background `--surface-container`. Status badge top-right. Four data points in a 2×2 grid. Blood Red progress indicator bar at the bottom for deposit status.

**Stat Card** (Admin Overview) — Large numeral in Display-LG. Label in Inter Title-SM below. Subtle `0 20px 40px rgba(28,27,27,0.06)` shadow as the only depth cue.

### Tables
Used in admin request queue and payment ledger. No striped rows. Alternating backgrounds use `--surface` and `--surface-container`. Header row uses Inter Title-SM all-caps. No vertical borders. 0px radius on the table container. Sortable columns indicated by an SVG chevron icon in the header.

### Forms
Bottom-border-only inputs throughout. Textarea auto-expands with content (Vanilla JS). Select elements use a custom-styled wrapper with a chevron SVG — no default browser appearance. All form groups have a label, input, and error message slot. Error messages appear below the field in `--secondary` (Blood Red) color when triggered.

### Multi-Step Form Controller
Vanilla JS class (`StepController`) manages step visibility, progress indicator updates, and back/next button states. Each step is a `<section>` with a `data-step` attribute. Current step is tracked in a `currentStep` variable. Step data is stored in a `formState` object and persisted to `sessionStorage` between steps.

### Booking / Consultation UI
- Progress bar: horizontal step indicators using flex layout. Completed steps filled with `--primary`, current step outlined with `--secondary`.
- Body placement SVG: clickable SVG regions representing body zones. Selected region fills with `--secondary` at 40% opacity. Selection stored in `formState`.
- File upload zone: `border-dashed` style replaced with a color-shift background on drag-over. Uses `FileReader` API for client-side preview.

### Notification / Alert Banners
Full-width, no border-radius. Color backgrounds to signal type:
- **Info** — `--surface-container-low` background
- **Success** — Dark green tint (within design system warmth)
- **Warning** — Muted amber
- **Error / Critical** — `--secondary` Blood Red background with white text

### Chips / Tags
Style tags for portfolio filtering and tattoo style selection. 0px radius. `--surface-container-highest` background. `--on-surface-variant` text. No border. Padding: `0.25rem 0.75rem`. Active state: `--primary` background, `--on-primary` text.

### Modal / Overlays
Used for image lightbox in portfolio and deposit confirmation. Glassmorphism backdrop: `--surface-container-low` at 80% opacity, `backdrop-blur-[20px]`. Modal panel has `0 20px 40px rgba(28,27,27,0.06)` shadow. 0px radius. Closed via Escape key or overlay click.

---

## 11. Feature Mapping

| Client Requirement                         | Dashboard Location                    | UI Implementation                                     |
|--------------------------------------------|---------------------------------------|-------------------------------------------------------|
| Submit custom design requests              | `dashboard/new-request.html`          | 5-step Vanilla JS form with step controller           |
| Upload reference images                    | `dashboard/upload-references.html`    | Drag-and-drop zone with FileReader preview            |
| Manage deposit payments                    | `dashboard/payments.html`             | Status card + payment history table                   |
| View aftercare instructions                | `dashboard/aftercare.html`            | Gated content, released by admin post-session         |
| Track consultation status                  | `dashboard/my-requests.html`          | Status badge system (New, In Review, Approved, etc.)  |
| Communicate with artist                    | `dashboard/messages.html`             | Thread-based inbox, reply form                        |
| Artist reviews incoming requests           | `admin/requests.html`                 | Sortable queue with filter tabs                       |
| Artist approves / declines requests        | `admin/request-detail.html`           | Action button panel (Approve, Decline, Revise)        |
| Artist marks deposit as received           | `admin/payments.html`                 | Row-level action button, status toggle                |
| Artist releases aftercare to client        | `admin/aftercare.html`                | Template selector + assign-to-client action           |
| Artist manages portfolio images            | `admin/portfolio.html`                | Grid editor with drag-to-reorder, tag editor          |

---

## 12. Tailwind Strategy

### CDN Implementation
Tailwind is loaded via the official Play CDN link in every HTML file's `<head>`. A `tailwind.config` object is defined inline in a `<script>` tag immediately after the CDN link on every page, enabling dark mode and extending the theme.

```
<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          newsreader: ['Newsreader', 'serif'],
          inter: ['Inter', 'sans-serif'],
        },
        letterSpacing: {
          editorial: '-0.02em',
        },
        borderRadius: {
          DEFAULT: '0px',
        }
      }
    }
  }
</script>
```

### Utility-First Approach
All styling is applied inline via Tailwind class strings. No external CSS file for layout. A minimal `style.css` is used only for custom properties (CSS tokens), the glassmorphism backdrop blur (where Tailwind's utility needs a CSS variable fallback), and the button gradient sheen.

### Responsive Classes
Mobile-first. Base classes apply to mobile (`< 640px`). `sm:`, `md:`, `lg:`, and `xl:` prefixes progressively enhance for larger viewports. All layout shifts (sidebar collapse, grid column changes, hero height adjustments) are expressed via these prefixes.

### Dark Mode
`dark:` class prefix used throughout. The `dark` class is toggled on `<html>`. Every component must declare both its light-mode Tailwind class and its `dark:` variant. Background, text, border, and shadow colors all have explicit dark variants.

---

## 13. Folder Structure

```
inkwell-studio/
├── assets/
│   ├── css/
│   │   └── style.css              ← CSS custom properties, button sheen gradient
│   ├── js/
│   │   ├── main.js                ← Dark mode toggle, navbar, mobile menu
│   │   ├── step-form.js           ← Multi-step consultation form controller
│   │   ├── upload.js              ← File drag-and-drop + FileReader preview
│   │   ├── portfolio-filter.js    ← Client-side portfolio filtering by tag
│   │   ├── dashboard.js           ← Dashboard interactivity (tabs, modals)
│   │   └── admin.js               ← Admin-specific controls and table actions
│   ├── images/
│   │   ├── portfolio/             ← Portfolio placeholder images
│   │   ├── artist/                ← Artist portrait placeholder
│   │   └── ui/                    ← Body map SVG, icons
│   └── fonts/                     ← (Empty — using Google Fonts CDN)
├── pages/
│   ├── index.html                 ← Home 1
│   ├── index-2.html               ← Home 2
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   ├── portfolio-single.html
│   ├── consultation.html
│   ├── aftercare.html
│   ├── contact.html
│   ├── coming-soon.html
│   ├── 404.html
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   ├── user-dashboard.html
│   ├── admin-dashboard.html
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   └── credits.md
└── README.md
```

---

## 14. Responsive Strategy

### Breakpoint Behavior

| Breakpoint | Width      | Behavior                                                                 |
|------------|------------|--------------------------------------------------------------------------|
| Mobile     | < 640px    | Single column. Hamburger nav. Full-screen menu overlay. Sidebar becomes bottom sheet. Stacked form steps. |
| Tablet     | 640–1024px | Two-column grids. Sidebar collapses to icon rail (64px). Dashboard stats in 2×2. |
| Desktop    | 1024–1280px| Three-column portfolio grid. Full sidebar (240px). Expanded navbar. Split auth layouts. |
| Large      | > 1280px   | Max content width capped at `max-w-7xl` centered. Hero typography scales up to Display-LG full size. |

### Mobile-Specific Implementations
- Touch targets are minimum 44×44px for all interactive elements (buttons, nav items, chips)
- Reduced motion: CSS `@media (prefers-reduced-motion: reduce)` disables all transitions and keyframe animations
- Images use `loading="lazy"` attribute and serve `srcset` with mobile-optimized sizes
- Tables on mobile scroll horizontally within a `overflow-x-auto` wrapper — no data is hidden
- The multi-step form on mobile shows one question per screen with a floating bottom CTA bar

---

## 15. Animations & Interactions

All animations are implemented in CSS via Tailwind's `transition` and `duration` utilities, or via small Vanilla JS class toggles. No animation libraries.

### Public Site
- **Navbar on scroll** — After 80px scroll, navbar background opacity increases from 80% to 98%. Implemented via `scroll` event listener in `main.js`.
- **Portfolio image hover** — On hover, image scales to `scale-105` with `transition-transform duration-500 ease-out`. Caption overlay fades from 60% to 100% opacity.
- **Home dropdown** — Opens with `opacity-0` to `opacity-100` + `translate-y-[-8px]` to `translate-y-0` in 200ms. Chevron icon rotates 180°.
- **CTA button hover** — Background gradient shifts angle. Blood Red secondary button lifts with `translate-y-[-2px]` shadow on hover.
- **Section entry** — Sections use `IntersectionObserver` to add a `is-visible` class on scroll entry. Elements animate from `opacity-0 translate-y-8` to `opacity-100 translate-y-0` with staggered delays.

### Dashboard
- **Sidebar item active state** — Instant background color swap. Left border slides in from zero width to 3px via `transition-all duration-150`.
- **Tab switching** — Content panels cross-fade at 200ms. Active tab indicator slides horizontally.
- **Request status badge** — Pulsing dot animation (`animate-pulse`) on "In Review" status to indicate live state.
- **File upload zone** — On dragover, background shifts to `--surface-container` and a dashed pseudo-border appears via `outline`. On drop, a success confirmation animates in.
- **Step form progress** — Completed steps fill from left to right with a 300ms ease transition. Step numbers swap from numeral to checkmark SVG on completion.
- **Modal open** — Backdrop fades in at 200ms. Modal panel scales from `scale-95` to `scale-100` at 250ms.

---

## 16. SEO & Performance

### On-Page SEO
Every HTML page includes:
- A unique `<title>` tag (max 60 characters), formatted as: `Page Name — Inkwell Studio`
- A `<meta name="description">` tag (150–160 characters) tailored to each page's content
- One `<h1>` per page with the primary keyword for that page
- Proper heading hierarchy (`h1` → `h2` → `h3`) with no skipped levels
- All images include descriptive `alt` attributes
- Canonical `<link rel="canonical">` on every page
- Open Graph tags (`og:title`, `og:description`, `og:image`) for social sharing
- JSON-LD structured data on the homepage: `LocalBusiness` schema including studio name, address, URL, and service types

### Performance Best Practices
- All portfolio images are provided in WebP format with JPEG fallback using `<picture>` + `<source>` elements
- Images use `loading="lazy"` except for above-the-fold hero images which use `loading="eager"` with explicit `width` and `height` to prevent CLS
- CSS custom properties are declared in `<head>` to prevent flash of unstyled content
- Dark mode preference is read and the `dark` class applied before first paint to prevent flash
- JavaScript files are loaded with `defer` attribute — no render-blocking scripts
- `main.js` is the only script loaded on public pages; dashboard and admin scripts are loaded only on their respective pages
- Google Fonts loaded with `display=swap` to prevent invisible text during font load

### Performance Targets
- PageSpeed Score: 90+ mobile / 95+ desktop
- LCP < 2.5s (hero image preloaded via `<link rel="preload">`)
- CLS < 0.1 (explicit image dimensions on all media)
- FID < 100ms (minimal JS on page load)

### File Assets
- `sitemap.xml` — Template included in root, structured for all public pages
- `robots.txt` — Production-ready, blocks `/admin/` and `/dashboard/` from crawling
- Favicon set: `favicon.ico`, `apple-touch-icon.png`, `favicon-32x32.png`

---

## 17. Development Notes

### RTL Implementation
RTL support is provided structurally. All layout directions use Tailwind's logical property classes where available (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`). The `dir="rtl"` attribute is added to `<html>` for RTL locales. A `rtl.css` file in `assets/css/` contains overrides for elements that Tailwind cannot handle via logical properties (e.g., the sidebar position flip, the multi-step progress indicator directionality). The dark mode toggle and nav hamburger remain in the same logical position.

### Auth State Simulation
Since this is a static template with no backend, authentication state is simulated using `localStorage`. A `isLoggedIn` key is set to `true` on login form submission and `false` on logout. `main.js` checks this key on every dashboard and admin page load and redirects to `login.html` if the key is absent or false. This gate is clearly commented as a placeholder for real backend integration.

### Integration Readiness
All forms include `data-formspree-id` attributes as placeholder hooks for Formspree. The contact and consultation forms are compatible with Netlify Forms when deployed on Netlify (hidden `netlify` attribute commented in code). The deposit payment section includes a clearly marked `<!-- STRIPE BUTTON PLACEHOLDER -->` comment with instructions for embedding a Stripe Payment Link. The calendar page includes a `<!-- CALENDLY / CAL.COM EMBED PLACEHOLDER -->` comment.

### Design System Fidelity Checklist
The following design system rules must be enforced during development and verified before submission:

- [ ] Zero rounded corners on all elements — `border-radius: 0px` everywhere
- [ ] No 1px solid borders used to define section boundaries — only background shifts
- [ ] Blood Red (`--secondary`) used only for "Book Now" / critical actions
- [ ] No pure grey text — `--on-surface-variant` (#444748) for secondary text only
- [ ] No icons used unless absolutely required — typography leads all navigation
- [ ] Glassmorphism applied only to floating nav and overlays — not cards or sections
- [ ] Button gradient sheen applied to primary black buttons only
- [ ] `spacing-12` (4rem) minimum vertical gap between list/card items

### Code Quality Standards
- HTML: Semantic elements throughout (`<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`). ARIA labels on all interactive elements without visible text labels.
- CSS: Only CSS custom properties and Tailwind utilities. No inline `style=""` attributes except for dynamically computed values set by JavaScript.
- JavaScript: ES6+ (`const`, `let`, arrow functions, template literals, `class`, destructuring). No `var`. Modular functions with single responsibilities. No `console.log` in production. All event listeners cleaned up on page unload where applicable.
- Comments: Section headers in HTML (`<!-- ========== HERO SECTION ========== -->`). JSDoc comments on all exported functions. CSS custom property groups documented with their design system token name.

### Accessibility Requirements (WCAG 2.1 AA)
- Color contrast ratio: minimum 4.5:1 for body text, 3:1 for large text and UI components
- All form inputs have associated `<label>` elements (not just placeholder text)
- Keyboard navigation: all interactive elements reachable via Tab, activated via Enter/Space
- Focus visible: custom `focus-visible:outline` styles in Blood Red (2px offset) on all interactive elements — never `outline: none` without a replacement
- Skip navigation link: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>` at the top of every page
- Screen reader: `aria-live="polite"` regions on form error messages and dashboard notification areas
- Image alt text: descriptive for portfolio images (e.g., "Fine line botanical tattoo on forearm, black ink"), empty `alt=""` for decorative images

---

## Appendix: Page Count Summary

| Zone              | Page Count | Files                          |
|-------------------|------------|--------------------------------|
| Public Website    | 11         | Including 2 homepages, 404, Coming Soon |
| Authentication    | 4          | Login, Sign Up, Forgot, Reset  |
| Client Dashboard  | 10         | Full consultation pipeline     |
| Admin Dashboard   | 11         | Full studio management suite   |
| **Total**         | **36**     |                                |

---

*Blueprint document generated for Inkwell Studio template. All section references correspond directly to the HTML Template Development Guide specifications and the "Ink & Iron" Design System. No code has been generated in this document — this is an architectural specification for development.*

# Inkwell Studio Template Documentation

Welcome to the Inkwell Studio HTML template documentation. This guide will help you install, customize, and utilize the template effectively.

## Table of Contents
1. [Installation](#installation)
2. [Customization](#customization)
3. [Page Structure](#page-structure)
4. [Credits](#credits)
5. [Changelog](#changelog)
6. [Support](#support)

---

## Installation

### Prerequisites
- A basic text editor (VS Code recommended)
- A modern web browser

### Steps
1. **Extract the Files:** Unzip the downloaded template package.
2. **Review Structure:** You should see a root directory containing the HTML files, an `assets/` folder, and this `documentation/` folder.
3. **Run Locally:** Open `index.html` in your browser to view the template locally.

> Note: To fully test features that require `localStorage` or modules, we recommend running a local server. In VS Code, you can use the "Live Server" extension.

---

## Customization

### Editing Content
All content is written in standard HTML. Open any `.html` file and change the text inside the HTML tags (like `<h1>`, `<p>`, etc.).

### Colors and Design Tokens
Inkwell Studio uses a centralized CSS variable system. To edit the primary colors or spacing, open `assets/css/style.css`.
Look for the `:root` pseudo-class:

```css
:root {
  --primary: #ffffff;
  --on-primary: #000000;
  --secondary: #b52619; /* Blood Red used for CTAs */
  --surface: #1c1b1b;
  --surface-container: #2a2929;
  /* ... */
}
```

### Images
Replace the placeholder images inside the `assets/images` directory. Ensure you use the exact same paths or update the paths within the `src` attribute of the `<img>` tags. Use WebP for optimized performance.

### Navigation Links
To add or remove links from the top navigation bar, edit the respective `<li>` elements inside the `<nav>` section of your `index.html` and other standard pages.

---

## Page Structure

All pages are organized with a consistent layout structure.

- **Header/Navbar:** Contains the logo, dark mode toggle, RTL toggle, and primary navigation.
- **Main Section:** This holds the core content. Usually organized into distinct sections (e.g., `<section class="hero-section">`).
- **Footer:** Contains links, studio info, and social icons.

**Key Files:**
- `index.html`: Main home page.
- `index-2.html`: Alternative home page.
- `about.html`, `contact.html`, `services.html`: Static info pages.
- `portfolio.html`: Showcase gallery.
- `login.html`, `signup.html`: Authentication pages.
- User and Admin specific dashboards.

---

## Credits

### Fonts
- **Newsreader**: Available from [Google Fonts](https://fonts.google.com/specimen/Newsreader).
- **Inter**: Available from [Google Fonts](https://fonts.google.com/specimen/Inter).

### Libraries/Frameworks
- Built entirely with Tailwind CSS (CDN).
- Icons provided by default SVG/Phosphor/Heroicons logic (check `svg` paths).

### Images
Placeholder images used from Unsplash/Pexels. **Note:** Please replace all placeholders with your own artistic portfolio for production.

---

## Changelog

**Version 1.0.0**
- Initial release.
- Added comprehensive SEO optimization across all pages.
- Implemented Dark Mode and RTL logic.
- Included full dashboard and public page structural designs.

---

## Support

If you need any assistance beyond what is covered in this documentation:
1. Ensure your issues are not related to external browser extensions or caching.
2. For specific template customizations, refer to standard HTML/Tailwind documentation.
3. Reach out to the template author/support team via the marketplace where you purchased the template.

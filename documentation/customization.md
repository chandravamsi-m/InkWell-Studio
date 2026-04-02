# Customization

## Editing Content
All content is written in standard HTML. Open any `.html` file and change the text inside the HTML tags (like `<h1>`, `<p>`, etc.).

## Colors and Design Tokens
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

## Images
Replace the placeholder images inside the `assets/images` directory. Ensure you use the exact same paths or update the paths within the `src` attribute of the `<img>` tags. Use WebP for optimized performance.

## Navigation Links
To add or remove links from the top navigation bar, edit the respective `<li>` elements inside the `<nav>` section of your `index.html` and other standard pages.


The user wants a favicon for their portfolio site (Belkessam Manil — Full Stack Developer). No image was provided, so I'll generate one using AI.

**Design concept**: A monogram "BM" (Belkessam Manil) favicon with a modern gradient matching the site's existing aesthetic (the site uses a purple/violet gradient theme based on `gradient-text` class and Aurora background).

## Plan: Generate & Install Optimized Favicon

**1. Generate favicon image** using Nano banana pro (`google/gemini-3-pro-image-preview`) for highest quality:
- 1024×1024 PNG, square format
- Clean monogram "BM" in white/light, on a deep purple-to-violet gradient background
- Rounded square shape, bold sans-serif, high contrast for tiny sizes (16×16 readability)
- No fine details — favicons must stay legible at 16px

**2. Generate optimized sizes** with ImageMagick (via `nix run nixpkgs#imagemagick`):
- `favicon.ico` (multi-resolution: 16, 32, 48) — for legacy browsers
- `favicon-16.png`, `favicon-32.png` — modern browsers
- `apple-touch-icon.png` (180×180) — iOS home screen
- `favicon.svg` (optional, only if generation gives clean output) — skip if AI output is raster-only

**3. Install in project**:
- Delete existing `public/favicon.ico` (currently the default Lovable favicon)
- Copy new files to `public/`
- Update `index.html` `<head>` with proper link tags:
  ```html
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  ```

**4. QA**: Inspect generated PNG visually before installing to confirm legibility at small sizes.

**Files changed**:
- `public/favicon.ico` (replaced)
- `public/favicon-16.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` (new)
- `index.html` (updated `<head>` favicon links)

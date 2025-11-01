# Scripts

This directory contains utility scripts for the boilerplate.

## Generate Placeholder Images

Generate lightweight placeholder images for all required images in the project.

**Usage:**

```bash
npm run generate:placeholders
```

**What it does:**
- Creates placeholder images in the `public/` directory
- Generates simple, lightweight images with light pastel colors
- Each image displays its purpose and dimensions
- Images are optimized for web use (JPEG quality: 80)

**Generated images:**
- `public/services/service-1.jpg` through `service-4.jpg` (800×600)
- `public/hero-image.jpg` (1920×1080)
- `public/about-image.jpg` and `about-image-2.jpg` (800×600)
- `public/service-bg.jpg` (1920×1080)
- `public/cta-background.jpg` (1920×600)
- `public/service-features.jpg` (600×400)
- `public/your-image.png` (360×900)

**Requirements:**
- Node.js
- Sharp (automatically installed as a dev dependency)

**Note:** Replace these placeholder images with your actual images before deploying to production.

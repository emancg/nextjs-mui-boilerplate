/**
 * Generate Placeholder Images Script
 *
 * This script creates simple, lightweight placeholder images for the boilerplate.
 * Run with: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Sharp not found. Installing sharp...');
  console.log('Please run: npm install --save-dev sharp');
  console.log('Then run this script again.');
  process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'public');
const servicesDir = path.join(publicDir, 'services');

// Create directories if they don't exist
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Image configurations
const images = [
  // Service images
  { path: 'services/service-1.jpg', width: 800, height: 600, color: '#e3f2fd', text: 'Service 1' },
  { path: 'services/service-2.jpg', width: 800, height: 600, color: '#f3e5f5', text: 'Service 2' },
  { path: 'services/service-3.jpg', width: 800, height: 600, color: '#e8f5e9', text: 'Service 3' },
  { path: 'services/service-4.jpg', width: 800, height: 600, color: '#fff3e0', text: 'Service 4' },

  // Hero and about images
  { path: 'hero-image.jpg', width: 1920, height: 1080, color: '#e1f5fe', text: 'Hero Image' },
  { path: 'about-image.jpg', width: 800, height: 600, color: '#fce4ec', text: 'About Image' },
  { path: 'about-image-2.jpg', width: 800, height: 600, color: '#f1f8e9', text: 'About Image 2' },

  // Background images
  { path: 'service-bg.jpg', width: 1920, height: 1080, color: '#e8eaf6', text: 'Service Background' },
  { path: 'cta-background.jpg', width: 1920, height: 600, color: '#e0f2f1', text: 'CTA Background' },

  // Feature images
  { path: 'service-features.jpg', width: 600, height: 400, color: '#fff9c4', text: 'Service Features' },
  { path: 'your-image.png', width: 360, height: 900, color: '#ede7f6', text: 'Your Image' },
];

// Function to convert hex color to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 240, g: 240, b: 240 };
}

// Generate placeholder images
async function generatePlaceholders() {
  console.log('🎨 Generating placeholder images...\n');

  for (const img of images) {
    try {
      const fullPath = path.join(publicDir, img.path);
      const rgb = hexToRgb(img.color);

      // Create a simple SVG with text
      const svg = `
        <svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="${img.color}"/>
          <text
            x="50%"
            y="50%"
            font-family="Arial, sans-serif"
            font-size="32"
            fill="#666"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            ${img.text}
          </text>
          <text
            x="50%"
            y="calc(50% + 40px)"
            font-family="Arial, sans-serif"
            font-size="18"
            fill="#999"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            ${img.width} × ${img.height}
          </text>
        </svg>
      `;

      // Convert SVG to image
      const buffer = Buffer.from(svg);

      if (img.path.endsWith('.png')) {
        await sharp(buffer)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(fullPath);
      } else {
        await sharp(buffer)
          .jpeg({ quality: 80, progressive: true })
          .toFile(fullPath);
      }

      console.log(`✅ Created: ${img.path}`);
    } catch (error) {
      console.error(`❌ Failed to create ${img.path}:`, error.message);
    }
  }

  console.log('\n✨ Done! All placeholder images have been generated.');
}

// Run the script
generatePlaceholders().catch(console.error);

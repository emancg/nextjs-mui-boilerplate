const fs = require("fs");
const path = require("path");

// Map of Google Font names to their variable names in layout.js
const googleFonts = {
  "Playfair Display": "--font-playfair-display",
  Lora: "--font-lora",
  Montserrat: "--font-montserrat",
  Inter: "--font-inter",
  Roboto: "--font-roboto",
  Merriweather: "--font-merriweather",
  Orbitron: "--font-orbitron",
  Rajdhani: "--font-rajdhani",
  Poppins: "--font-poppins",
  "Cormorant Garamond": "--font-cormorant-garamond",
  Quicksand: "--font-quicksand",
  "Special Elite": "--font-special-elite",
  "Source Sans 3": "--font-source-sans-pro",
  "Source Sans Pro": "--font-source-sans-pro",
  "Open Sans": "--font-open-sans",
  Nunito: "--font-nunito",
  Lato: "--font-lato",
};

function analyzeVariantFonts() {
  const variantsDir = "./src/lib/themes/variants";
  const files = fs.readdirSync(variantsDir);

  const fontUsage = {};

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;

    const filePath = path.join(variantsDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    // Extract variant name
    const variantMatch = content.match(/name:\s*['"](\w+)['"]/);
    const variantName = variantMatch ? variantMatch[1] : file.replace(".js", "");

    // Extract fontFamily
    const fontFamilyMatch = content.match(/fontFamily:\s*['"](.*?)['"]/);
    const fontFamily = fontFamilyMatch ? fontFamilyMatch[1] : "Not specified";

    // Check which Google Fonts are used (by CSS variable or name)
    const usedGoogleFonts = [];
    Object.entries(googleFonts).forEach(([fontName, cssVariable]) => {
      if (fontFamily.includes(fontName) || fontFamily.includes(cssVariable)) {
        usedGoogleFonts.push(fontName);
      }
    });

    fontUsage[variantName] = {
      fontFamily,
      usesGoogleFonts: usedGoogleFonts.length > 0,
      googleFonts: usedGoogleFonts,
      isSystemFont: usedGoogleFonts.length === 0,
    };
  });

  return fontUsage;
}

// Run analysis
const fontUsage = analyzeVariantFonts();

console.log("\n📊 Font Usage by Variant:\n");
console.log("=".repeat(80));

// Count how many variants use each font
const fontStats = {};
Object.keys(googleFonts).forEach((font) => {
  fontStats[font] = 0;
});

Object.entries(fontUsage).forEach(([variant, data]) => {
  console.log(`\n${variant}:`);
  console.log(`  Font Family: ${data.fontFamily}`);
  console.log(`  Uses Google Fonts: ${data.usesGoogleFonts ? "✅" : "❌"}`);
  if (data.googleFonts.length > 0) {
    console.log(`  Google Fonts Used: ${data.googleFonts.join(", ")}`);
    data.googleFonts.forEach((font) => {
      fontStats[font]++;
    });
  }
});

console.log("\n" + "=".repeat(80));
console.log("\n📈 Google Font Usage Statistics:\n");

const sortedFonts = Object.entries(fontStats).sort((a, b) => b[1] - a[1]);

sortedFonts.forEach(([font, count]) => {
  const percentage = ((count / Object.keys(fontUsage).length) * 100).toFixed(1);
  console.log(`${font}: ${count} variants (${percentage}%)`);
});

console.log("\n" + "=".repeat(80));

// Count system font variants
const systemFontVariants = Object.entries(fontUsage).filter(
  ([_, data]) => data.isSystemFont
);
console.log(`\n✅ ${systemFontVariants.length} variants use system fonts (no Google Fonts needed)`);
console.log(
  `❌ ${Object.keys(fontUsage).length - systemFontVariants.length} variants use Google Fonts`
);

console.log("\n💡 Recommendation:");
console.log(
  "   Only load Google Fonts for the active variant to improve performance!"
);
console.log(
  `   For 'memphis' variant, you need: ${fontUsage.memphis?.usesGoogleFonts ? fontUsage.memphis.googleFonts.join(", ") : "NO GOOGLE FONTS (uses system fonts)"}`
);

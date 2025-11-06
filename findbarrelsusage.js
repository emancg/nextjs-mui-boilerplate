const fs = require("fs");
const path = require("path");

// Patterns that indicate barrel imports
const barrelPatterns = [
  /from ['"]@\/lib\/components['"]/,  // Main barrel
  /from ['"]@\/lib\/components\/(\w+)['"]/,  // Category barrels (hero, content, etc)
  /from ['"]\.['"]/,  // Relative imports to index.js in same directory
];

function findBarrelUsage(dir, results = [], basePath = dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip node_modules and .next
    if (filePath.includes("node_modules") || filePath.includes(".next")) {
      return;
    }

    if (stat.isDirectory()) {
      findBarrelUsage(filePath, results, basePath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file) && !file.includes("index.")) {
      const content = fs.readFileSync(filePath, "utf8");
      const relativePath = path.relative(basePath, filePath);

      // Check for barrel imports
      const barrelImports = [];

      // Check main barrel
      if (content.match(/from ['"]@\/lib\/components['"]/)) {
        barrelImports.push("Main barrel (@/lib/components)");
      }

      // Check category barrels (hero, content, navigation, etc)
      const categoryMatches = content.matchAll(/from ['"]@\/lib\/components\/(\w+)['"]/g);
      for (const match of categoryMatches) {
        barrelImports.push(`Category barrel (@/lib/components/${match[1]})`);
      }

      // Check relative index imports
      const relativeMatches = content.matchAll(/from ['"]\.\.?\/([\w\/]+)['"]/g);
      for (const match of relativeMatches) {
        const importPath = match[1];
        // If it doesn't end with a specific file, it's likely importing index.js
        if (!importPath.includes(".") && !importPath.match(/\/\w+\.\w+$/)) {
          barrelImports.push(`Relative barrel (./${importPath})`);
        }
      }

      if (barrelImports.length > 0) {
        results.push({
          file: relativePath,
          barrelImports: [...new Set(barrelImports)],
          lineCount: content.split("\n").length,
        });
      }
    }
  });

  return results;
}

// Run it
const usages = findBarrelUsage("./src");

// Categorize by file type/location
const categories = {
  pages: [],
  components: [],
  lib: [],
  other: [],
};

usages.forEach((usage) => {
  if (usage.file.startsWith("app")) {
    categories.pages.push(usage);
  } else if (usage.file.includes("components")) {
    categories.components.push(usage);
  } else if (usage.file.includes("lib")) {
    categories.lib.push(usage);
  } else {
    categories.other.push(usage);
  }
});

console.log("\n📦 Barrel Import Usage Analysis\n");
console.log("=".repeat(80));

console.log("\n🔥 HIGH PRIORITY - Page Files (Hot Reload Impact)");
console.log("These files are edited frequently and impact dev experience:\n");
if (categories.pages.length === 0) {
  console.log("  ✅ No barrel imports found in page files!");
} else {
  categories.pages.forEach((usage) => {
    console.log(`  📄 ${usage.file}`);
    usage.barrelImports.forEach((imp) => {
      console.log(`     - ${imp}`);
    });
  });
}

console.log("\n⚠️  MEDIUM PRIORITY - Component Files");
console.log("These affect component dev but less critical:\n");
if (categories.components.length === 0) {
  console.log("  ✅ No barrel imports found in component files!");
} else {
  categories.components.slice(0, 10).forEach((usage) => {
    console.log(`  📦 ${usage.file}`);
    usage.barrelImports.forEach((imp) => {
      console.log(`     - ${imp}`);
    });
  });
  if (categories.components.length > 10) {
    console.log(`  ... and ${categories.components.length - 10} more component files`);
  }
}

console.log("\n💡 LOW PRIORITY - Library/Context Files");
console.log("Infrastructure code, rarely edited:\n");
if (categories.lib.length === 0) {
  console.log("  ✅ No barrel imports found in lib files!");
} else {
  categories.lib.slice(0, 5).forEach((usage) => {
    console.log(`  📚 ${usage.file}`);
  });
  if (categories.lib.length > 5) {
    console.log(`  ... and ${categories.lib.length - 5} more lib files`);
  }
}

console.log("\n" + "=".repeat(80));
console.log("\n📊 Summary:");
console.log(`  Total files with barrel imports: ${usages.length}`);
console.log(`  🔥 High Priority (Pages): ${categories.pages.length}`);
console.log(`  ⚠️  Medium Priority (Components): ${categories.components.length}`);
console.log(`  💡 Low Priority (Lib): ${categories.lib.length}`);
console.log(`  📦 Other: ${categories.other.length}`);

console.log("\n💡 Recommendation:");
if (categories.pages.length === 0) {
  console.log("   ✅ All page files are already optimized!");
  console.log("   🎯 Focus: Only fix component files if you edit them frequently");
} else {
  console.log("   🔥 Fix all HIGH PRIORITY files first for best dev experience");
}

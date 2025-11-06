const fs = require("fs");
const path = require("path");

function findBarrelExports(dir, results = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findBarrelExports(filePath, results);
    } else if (/index\.(js|jsx|ts|tsx)$/.test(file)) {
      const content = fs.readFileSync(filePath, "utf8");
      const exports = content.match(/export .* from/g);

      if (exports && exports.length > 0) {
        results.push({
          file: filePath,
          exportCount: exports.length,
          exports: exports,
        });
      }
    }
  });

  return results;
}

// Run it
const barrels = findBarrelExports("./src");

// Pretty print
console.log("\n🔍 Barrel Export Files Found:\n");
barrels.forEach((barrel) => {
  console.log(`📁 ${barrel.file}`);
  console.log(`   Exports: ${barrel.exportCount}`);
  barrel.exports.forEach((exp) => {
    console.log(`   - ${exp}`);
  });
  console.log("");
});

console.log(`\n✅ Total barrel files: ${barrels.length}`);

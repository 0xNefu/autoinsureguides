// scripts/fixStatePremiums.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const statesDir = path.join(__dirname, '../src/content/states');

console.log('🔧 Fixing dollar signs in state markdown files...');

const files = fs.readdirSync(statesDir).filter(file => file.endsWith('.md'));

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(statesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix frontmatter averagePremium
  const frontmatterMatch = content.match(/averagePremium:\s*"([^"]+)"/);
  if (frontmatterMatch) {
    const premium = frontmatterMatch[1];
    if (premium.startsWith(',')) {
      const newPremium = '$' + premium.substring(1);
      content = content.replace(
        `averagePremium: "${premium}"`,
        `averagePremium: "${newPremium}"`
      );
      console.log(`✅ Fixed ${file}: ${premium} → ${newPremium}`);
      fixedCount++;
    }
  }
  
  // Fix dollar signs in markdown body
  content = content.replace(/\\\$/g, '$'); // Remove LaTeX escaping
  content = content.replace(/,800\/year/g, '$800/year'); // Fix specific pattern
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`🎉 Fixed ${fixedCount} out of ${files.length} state files`);
console.log('💡 Some states may have different premium amounts (not $800)');
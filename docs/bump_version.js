const fs = require('fs');

const files = [
  'safetysecurity.html',
  'index.html',
  'convenience.html',
  'contact.html',
  'cart.html',
  'carstyle.html',
  'carperformance.html',
  'caressentials.html',
  'carcareproduct.html',
  'brands.html',
  'blog.html',
  'about.html',
  '404.html'
];

let updatedCount = 0;
files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('redesign-2026.css?v=2')) {
      content = content.replace(/redesign-2026\.css\?v=2/g, 'redesign-2026.css?v=3');
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
      console.log(`Updated ${file} -> v=3`);
    } else {
      console.log(`Skipped ${file} (v=2 not found)`);
    }
  }
});

console.log(`Successfully updated ${updatedCount} files to redesign-2026.css?v=3.`);

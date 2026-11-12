const fs = require('fs');
const path = require('path');

const files = [
  'index.html', 'about.html', 'caressentials.html', 'carcareproduct.html',
  'safetysecurity.html', 'carstyle.html', 'carperformance.html', 'convenience.html',
  'brands.html', 'blog.html', 'cart.html', 'contact.html', 'demo.html', '404.html'
];

const classes = new Set();
files.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    const matches = c.match(/class="([^"]+)"/g) || [];
    matches.forEach(m => {
      const clsStr = m.replace('class="', '').replace('"', '');
      clsStr.split(/\s+/).forEach(cls => {
        if (cls.trim()) classes.add(cls.trim());
      });
    });
  }
});

console.log('Total unique classes across all HTML pages:', classes.size);

// Check if any heading tags exist without proper styling
console.log('\n--- Button and Heading sample classes ---');
const btnAndHead = Array.from(classes).filter(c => c.includes('btn') || c.includes('title') || c.includes('heading') || c.includes('price'));
console.log(btnAndHead.slice(0, 40));

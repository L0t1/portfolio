// Script to copy sitemap.xml from dist/react to dist after build
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'dist', 'react', 'sitemap.xml');
const dest = path.join(__dirname, 'dist', 'sitemap.xml');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('sitemap.xml copied to dist/');
} else {
  console.error('sitemap.xml not found in dist/react/');
  process.exit(1);
}

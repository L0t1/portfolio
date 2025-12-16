// Cross-platform build script for portfolio project
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function safeCopy(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } else {
    console.warn(`File not found: ${src}`);
  }
}

// 1. Ensure dist exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
  console.log('Created dist/');
}

// 2. Build React app
console.log('Building React app...');
execSync('npm install', { cwd: path.join(__dirname, 'lot-kyçyku-portfolio'), stdio: 'inherit' });
execSync('npm run build', { cwd: path.join(__dirname, 'lot-kyçyku-portfolio'), stdio: 'inherit' });

// 3. Copy static files to dist
const staticFiles = ['index.html', 'styles.css', 'script.js', 'avatar.jpg', 'favicon.svg'];
staticFiles.forEach(file => {
  safeCopy(path.join(__dirname, file), path.join(distDir, file));
});

// 4. Copy sitemap.xml from dist/react to dist
const reactSitemap = path.join(distDir, 'react', 'sitemap.xml');
const distSitemap = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(reactSitemap)) {
  fs.copyFileSync(reactSitemap, distSitemap);
  console.log('Copied sitemap.xml to dist/');
} else {
  console.warn('sitemap.xml not found in dist/react/');
}

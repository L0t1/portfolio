# Lot Kyçyku Portfolio - Dual Interface

This portfolio features **two distinct interfaces** serving different audiences:

## 🖥️ Terminal Interface (Main/Default)
**URL:** `https://yourdomain.com/` (root)

A backend-themed terminal interface designed for backend developers and system architects who appreciate CLI aesthetics.

**Features:**
- Terminal-style navigation
- Backend OS theme
- JSON-formatted data display
- Command-line interactions
- Boot sequence animation

**Tech Stack:**
- Vanilla HTML/CSS/JavaScript
- Custom terminal emulation
- No build process required

## ⚛️ React Interface (Modern/Alternative)
**URL:** `https://yourdomain.com/react/`

A modern, frontend-friendly portfolio with smooth animations and contemporary design.

**Features:**
- Smooth scroll animations (GSAP + Lenis)
- Interactive mascot character
- Modern UI/UX
- Responsive design
- Framer Motion animations

**Tech Stack:**
- React 19
- TypeScript
- Vite
- GSAP + ScrollTrigger
- Framer Motion
- Tailwind CSS (via CDN)

## 📁 Project Structure

```
l0t1/
├── index.html              # Terminal portfolio (main entry)
├── styles.css              # Terminal styles
├── script.js               # Terminal logic
├── avatar.jpg              # Profile image
├── favicon.svg             # Site favicon
├── vercel.json             # Deployment config
├── react/                  # Built React app (generated)
│   ├── index.html
│   └── assets/
└── lot-kyçyku-portfolio/   # React source code
    ├── App.tsx
    ├── components/
    ├── hooks/
    ├── vite.config.ts
    └── package.json
```

## 🔄 Navigation Between Interfaces

### From Terminal → React
On the terminal homepage, click the link:
> 🤓 If you're a frontend dev and this terminal is overwhelming, check out my **React portfolio here!**

### From React → Terminal
On the React hero section, click the link:
> 💻 Backend dev? Prefer terminals? **Check out the CLI version!**

## 🚀 Development

### Terminal Interface
No build required! Just edit the HTML/CSS/JS files directly:
```bash
# Serve locally (optional)
npx serve .
```

### React Interface
```bash
cd lot-kyçyku-portfolio

# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Build for production (outputs to ../react/)
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
The project is configured for Vercel deployment:

1. **Terminal** is served at root (`/`)
2. **React** is served at `/react/`
3. Both interfaces work seamlessly together

```bash
# Deploy to Vercel
vercel --prod
```

### Manual Deployment
1. Build the React app: `cd lot-kyçyku-portfolio && npm run build`
2. Upload the entire `l0t1` folder (including generated `/react` directory)
3. Ensure your server serves:
   - `index.html` at root
   - `/react/index.html` for React routes

## 🛠️ Making Changes

### Update Terminal Portfolio
Edit files directly in the root:
- `index.html` - Content and structure
- `styles.css` - Styling
- `script.js` - Interactivity

### Update React Portfolio
1. Edit source files in `lot-kyçyku-portfolio/`
2. Test with `npm run dev`
3. Build with `npm run build`
4. The built files automatically go to `/react/`

## ⚙️ Configuration Files

### `vite.config.ts`
- `base: '/react/'` - Sets base URL for React app
- `outDir: '../react'` - Outputs build to parent `/react` folder

### `vercel.json`
- Configures routing for both interfaces
- Sets cache headers
- Handles SPA routing for React app

## 📝 Notes

- The `/react` folder is **generated** and should not be edited directly
- The `/react` folder is gitignored - it's built during deployment
- Both portfolios share the same domain but are completely independent
- Each interface can be updated without affecting the other

## 🎯 Target Audiences

**Terminal Interface:**
- Backend developers
- DevOps engineers
- System administrators
- CLI enthusiasts
- Technical recruiters looking for backend talent

**React Interface:**
- Frontend developers
- UI/UX designers
- General recruiters
- Non-technical stakeholders
- Mobile users (better responsive experience)

---

**Author:** Lot Kyçyku  
**Email:** lotkycyku@gmail.com  
**GitHub:** [@L0t1](https://github.com/L0t1)

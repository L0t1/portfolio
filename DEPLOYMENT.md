# 🚀 Vercel Deployment Guide

## ✅ What You Need to Do

### **Answer: NO changes needed in Vercel Dashboard!**

The `vercel.json` file now includes build commands, so Vercel will automatically:
1. Build the React app during deployment
2. Serve the terminal at `/`
3. Serve the React app at `/react/`

## 📤 Deployment Steps

### 1. Commit and Push Your Changes

```bash
git add .
git commit -m "Merge terminal and React portfolios"
git push origin main
```

### 2. Vercel Will Automatically:

✅ Detect the changes  
✅ Run: `cd lot-kyçyku-portfolio && npm install && npm run build`  
✅ Build the React app to `/react/` directory  
✅ Deploy both portfolios  

### 3. That's It! 🎉

Your site will be live with:
- **Terminal Portfolio:** `https://yourdomain.com/`
- **React Portfolio:** `https://yourdomain.com/react/`

## 🔍 What Changed in vercel.json

```json
{
  "buildCommand": "cd lot-kyçyku-portfolio && npm install && npm run build",
  "installCommand": "echo 'No root dependencies'",
  ...
}
```

This tells Vercel:
- **buildCommand**: Build the React app before deployment
- **installCommand**: Skip root npm install (not needed)
- **rewrites**: Route `/react/` to the React app
- **headers**: Set proper caching for both apps

## 🎯 Expected Deployment Flow

```
1. Push to GitHub
   ↓
2. Vercel detects push
   ↓
3. Runs buildCommand
   ├─ cd lot-kyçyku-portfolio
   ├─ npm install
   └─ npm run build → outputs to /react/
   ↓
4. Deploys everything
   ├─ Terminal files (root)
   └─ React files (/react/)
   ↓
5. ✅ Live!
```

## 🐛 Troubleshooting

### If Build Fails:

**Check Vercel Build Logs** for errors. Common issues:

1. **Node version mismatch**
   - Add to `vercel.json`:
   ```json
   "build": {
     "env": {
       "NODE_VERSION": "18"
     }
   }
   ```

2. **Build timeout**
   - React build should take ~30 seconds
   - If it times out, check for infinite loops in components

3. **Missing dependencies**
   - Ensure `lot-kyçyku-portfolio/package.json` is committed
   - Ensure `lot-kyçyku-portfolio/package-lock.json` is committed

### If Routes Don't Work:

Check that `vercel.json` rewrites are correct:
```json
"rewrites": [
  {
    "source": "/react/:path*",
    "destination": "/react/:path*"
  },
  {
    "source": "/react",
    "destination": "/react/index.html"
  }
]
```

## 📊 Deployment Checklist

Before pushing:
- [x] `vercel.json` has buildCommand
- [x] `lot-kyçyku-portfolio/package.json` exists
- [x] `lot-kyçyku-portfolio/vite.config.ts` has `base: '/react/'`
- [x] `.gitignore` includes `/react/` (so you don't commit built files)
- [x] Links updated in both portfolios

## 🔄 Future Deployments

Every time you push:
1. Vercel rebuilds the React app automatically
2. Both portfolios get deployed
3. No manual steps needed!

### Update Terminal Only:
```bash
# Edit index.html, styles.css, script.js
git add .
git commit -m "Update terminal portfolio"
git push
# Vercel will still rebuild React (harmless)
```

### Update React Only:
```bash
# Edit files in lot-kyçyku-portfolio/
git add .
git commit -m "Update React portfolio"
git push
# Vercel rebuilds React with your changes
```

## 🎨 Custom Domain

If you have a custom domain:
- Terminal: `https://lotkycyku.com/`
- React: `https://lotkycyku.com/react/`

Both work automatically with the same domain!

---

**Status:** ✅ Ready to deploy  
**Action:** Just `git push` and Vercel handles everything!

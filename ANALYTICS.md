# Analytics Guidance

Current policy: **Vercel Web Analytics is enabled via CDN scripts** in `index.html` and includes Web Vitals tracking.

## Implementation (already present in `<head>`)

```html
<!-- Vercel Web Analytics -->
<script defer src="https://cdn.vercel-analytics.com/v1/script.js"></script>
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<!-- Web Vitals Tracking for Performance Monitoring -->
<script defer src="https://cdn.vercel-analytics.com/v1/web-vitals.js"></script>
```

## Custom events (optional)

```javascript
window.va?.('event', {
  name: 'contact_form_submitted',
  data: { section: 'contact' }
});
```

## Dashboard access
1) Open the project in the [Vercel Dashboard](https://vercel.com/dashboard).  
2) Go to **Analytics** to view page views, referrers, and Core Web Vitals.

## Notes on configuration
- No build step; CDN scripts are the lightweight path for this static site.
- `vercel.json` keeps cache/security headers and SPA rewrites; no analytics ID is required for the default setup.

## Privacy and performance
- Scripts are small (~2–3 KB gzipped) and deferred; negligible render impact.
- Data is sent to Vercel’s analytics endpoints; no PII collected by default.

## Troubleshooting
- Ensure deployment is on Vercel and allow a few minutes for data to appear.
- Check browser console for script loading errors before sending custom events.

---

**Last Updated**: December 9, 2025  
**Status**: Manual analytics enabled via CDN scripts  
**Site Type**: Static HTML Portfolio

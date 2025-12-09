# Analytics Guidance

Current policy: **Vercel Web Analytics is enabled via Vercel Insights endpoint** (`/_vercel/insights/script.js`) for plain HTML sites with automatic Web Vitals collection.

## Implementation (already present in `<head>`)

```html
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
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
- No build step; using Vercel's built-in `/insights/` endpoint for plain HTML sites.
- `vercel.json` keeps cache/security headers and SPA rewrites; no additional setup required.
- Web Vitals automatically collected through the Insights script.

## Privacy and performance
- Script is automatically served by Vercel; extremely lightweight with negligible render impact.
- Data is sent to Vercel's insights endpoints; no PII collected by default.
- Works automatically on Vercel-hosted sites without additional configuration.

## Troubleshooting
- Ensure deployment is on Vercel and allow a few minutes for data to appear.
- Check browser console for script loading errors before sending custom events.

---

**Last Updated**: December 9, 2025  
**Status**: Manual analytics enabled via CDN scripts  
**Site Type**: Static HTML Portfolio

# Vercel Web Analytics Configuration

This portfolio site is configured with **Vercel Web Analytics** to track visitor behavior and performance metrics.

## Implementation Details

### 1. Plain HTML Analytics Integration

Since this is a plain HTML/CSS/JavaScript portfolio (no framework), Vercel Web Analytics is integrated directly via script tags in the `<head>` section of `index.html`:

```html
<!-- Vercel Web Analytics -->
<script defer src="https://cdn.vercel-analytics.com/v1/script.js"></script>
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>

<!-- Web Vitals Tracking for Performance Monitoring -->
<script defer src="https://cdn.vercel-analytics.com/v1/web-vitals.js"></script>
```

### 2. What's Being Tracked

#### Page Views & Navigation
- Automatic page view tracking via the analytics script
- Hash-based navigation tracking (SPA-like behavior on `/home`, `/whoami`, `/skills`, etc.)

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Measures loading performance
- **CLS (Cumulative Layout Shift)**: Measures visual stability
- **FID (First Input Delay)**: Measures interactivity (legacy - being replaced by INP)
- **INP (Interaction to Next Paint)**: Measures responsiveness

#### Custom Events (if needed)
To track custom events, you can use the `window.va()` function:

```javascript
// Example: Track form submission
window.va?.('event', {
  name: 'contact_form_submitted',
  data: {
    section: 'contact'
  }
});
```

### 3. How It Works

1. **Script Injection**: The analytics script is deferred, so it doesn't block page rendering
2. **Queue Fallback**: The `window.va` function queues events if the analytics script hasn't loaded yet
3. **Client-Side Only**: All tracking happens in the browser - no server-side configuration needed
4. **Zero Configuration**: The analytics ID is automatically detected by Vercel when deployed to Vercel platform

### 4. Accessing Analytics Dashboard

When deployed to Vercel:

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to the **Analytics** tab
3. View insights including:
   - Page views
   - Top pages
   - Web Vitals metrics
   - Visitor information
   - Referrer data

### 5. Deployment Requirements

For Vercel Web Analytics to work, this project must be deployed on **Vercel platform**:

1. Push changes to your repository
2. Deploy on Vercel (automatic via GitHub, GitLab, or Bitbucket integration)
3. Analytics will automatically be enabled
4. Set your Analytics ID if needed (usually auto-detected)

### 6. No Package Dependencies Required

This implementation requires **NO npm packages** because:
- It uses Vercel's CDN-hosted analytics script
- No build process needed
- Works with pure HTML/CSS/JavaScript

### 7. Performance Impact

- **Script Size**: ~2-3 KB (gzipped)
- **Load Impact**: Minimal (deferred loading, non-blocking)
- **Network Requests**: 1 additional request to Vercel's analytics endpoint
- **No First-Party Cookies**: Uses first-party cookies for session tracking

### 8. Privacy & Data Collection

- Analytics data is sent to Vercel's secure servers
- No personally identifiable information is collected without your consent
- Compliant with GDPR, CCPA, and other privacy regulations when properly configured
- You can view Vercel's privacy policy for more details

### 9. Advanced Configuration (Optional)

If you need custom event tracking, you can enhance the implementation:

```javascript
// Track link clicks
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    window.va?.('event', {
      name: 'link_click',
      data: { url: this.href }
    });
  });
});

// Track form submissions
document.getElementById('contact-form')?.addEventListener('submit', function() {
  window.va?.('event', {
    name: 'contact_submitted',
    data: { timestamp: new Date().toISOString() }
  });
});
```

### 10. Vercel Configuration (vercel.json)

The included `vercel.json` provides:
- Static site configuration
- Cache headers for optimal performance
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- SPA rewrite rules for hash-based routing

## Troubleshooting

### Analytics Not Showing Data
- Ensure the site is deployed on **Vercel** (not other hosting)
- Wait a few minutes for data to appear in the dashboard
- Check browser console for any script loading errors
- Verify Vercel Analytics is enabled in project settings

### Web Vitals Not Tracking
- The `web-vitals.js` script requires user interaction or page load to measure metrics
- Metrics are only reported after the page has fully loaded
- Some metrics require navigation or interaction to be measured

### Custom Events Not Firing
- Ensure `window.va` is available before calling it
- Check browser console for any JavaScript errors
- Verify the analytics script loaded successfully

## Resources

- [Vercel Web Analytics Documentation](https://vercel.com/docs/analytics)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Vercel Analytics API Reference](https://vercel.com/docs/analytics/api)

## Next Steps

After deploying to Vercel:
1. Monitor analytics dashboard for visitor patterns
2. Analyze Web Vitals to optimize performance
3. Add custom event tracking for specific user actions
4. Set up performance alerts if needed

---

**Last Updated**: December 9, 2025  
**Analytics Version**: Vercel v1  
**Site Type**: Static HTML Portfolio

// This script dynamically updates relative and absolute links based on whether 
// the site is running on Vercel, localhost, or GitHub Pages.
document.addEventListener('DOMContentLoaded', () => {
    const hostname = window.location.hostname;

    // Check if running on localhost, Vercel, or GitHub Pages
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
    const isVercel = hostname.endsWith('.vercel.app');
    const isGitHubPages = hostname.endsWith('.github.io');
    
    // Vercel and local deployments serve from root (''), whereas GitHub Pages uses subpath (/Prath-Digital)
    const repoName = isGitHubPages ? '/Prath-Digital' : '';
    const baseUrl = (isLocal || isVercel || !isGitHubPages) ? '' : repoName;

    if (baseUrl) {
        // Fix standard anchor links (navbar, footer, etc.)
        document.querySelectorAll('a').forEach(link => {
            let href = link.getAttribute('href');
            if (href && href.startsWith('/') && !href.startsWith('//')) {
                if (!href.startsWith(baseUrl)) {
                    link.setAttribute('href', baseUrl + href);
                }
            }
        });
        
        // Fix images, stylesheets, and scripts
        document.querySelectorAll('link[rel="stylesheet"], script, img').forEach(el => {
            let attr = el.tagName === 'LINK' ? 'href' : 'src';
            let val = el.getAttribute(attr);
            if (val && val.startsWith('/') && !val.startsWith('//')) {
                if (!val.startsWith(baseUrl)) {
                    el.setAttribute(attr, baseUrl + val);
                }
            }
        });
    }
});


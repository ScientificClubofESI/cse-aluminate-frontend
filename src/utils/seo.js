// Utility to generate dynamic sitemap entries
// This can be used to create sitemap programmatically with alumni data

export const generateSitemapEntry = (url, lastmod, changefreq = 'weekly', priority = '0.8') => {
  return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

export const generateFullSitemap = (entries) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${entries.join('')}
</urlset>`;
};

// Example usage:
// const entries = [
//   generateSitemapEntry('https://yourdomain.com/', '2026-01-08', 'daily', '1.0'),
//   generateSitemapEntry('https://yourdomain.com/allalumni', '2026-01-08', 'daily', '0.9'),
// ];
// const sitemap = generateFullSitemap(entries);

// Structured data generators
export const generateOrganizationSchema = (name, url, logo, description, foundingDate, socialLinks = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    foundingDate,
    sameAs: socialLinks
  };
};

export const generatePersonSchema = (name, jobTitle, description, image, url) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    image,
    url
  };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

// SEO meta tag generator
export const generateMetaTags = ({
  title,
  description,
  keywords,
  ogImage = '/SEOpage.png',
  ogUrl,
  canonical
}) => {
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
    link: [
      { rel: 'canonical', href: canonical || ogUrl }
    ]
  };
};

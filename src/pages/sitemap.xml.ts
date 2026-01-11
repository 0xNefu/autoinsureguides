// src/pages/sitemap.xml.ts - UPDATED FOR INSURANCE SITE
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Sitemap generation failed: Site URL not set', { status: 500 });
  }

  // 1. Fetch ALL content collections
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const states = await getCollection('states', ({ data }) => !data.draft);
  const vehicles = await getCollection('vehicles', ({ data }) => !data.draft);
  const companies = await getCollection('companies', ({ data }) => !data.draft);

  // 2. Insurance Categories (from your feed data)
  const insuranceCategories = [
    "car-insurance-basics",
    "claims-accidents-help", 
    "saving-money-discounts",
    "state-insurance-guides",
    "commercial-fleet-insurance",
    "drivers-coverage",
    "insurance-news",
    "company-reviews",
    "vehicle-guides"
  ];

  // 3. Map blog posts
  const postsMap = posts
    .map((post) => {
      const lastModDate = post.data.updatedDate ?? post.data.date;
      const lastMod = lastModDate ? new Date(lastModDate).toISOString() : new Date().toISOString();

      return `
        <url>
          <loc>${new URL(`/blog/${post.slug}`, site).href}</loc>
          <lastmod>${lastMod}</lastmod>
          <priority>0.8</priority>
          <changefreq>weekly</changefreq>
        </url>
      `;
    })
    .join('\n');

  // 4. Map STATES pages (your 50 state money pages)
  const statesMap = states
    .map((state) => {
      const lastModDate = state.data.updatedDate ?? state.data.date;
      const lastMod = lastModDate ? new Date(lastModDate).toISOString() : new Date().toISOString();

      return `
        <url>
          <loc>${new URL(`/states/${state.data.state}/car-insurance`, site).href}</loc>
          <lastmod>${lastMod}</lastmod>
          <priority>0.9</priority> <!-- HIGH priority for state pages -->
          <changefreq>monthly</changefreq>
        </url>
      `;
    })
    .join('\n');

  // 5. Insurance category pages
  const categoryMap = insuranceCategories
    .map((category) => `
      <url>
        <loc>${new URL(`/categories/${category}`, site).href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
        <changefreq>weekly</changefreq>
      </url>
    `)
    .join('\n');

  // 6. Static pages for INSURANCE SITE
  const staticPages = [
    { loc: site.href, priority: 1.0, changefreq: 'daily' }, // Homepage
    { loc: '/blog', priority: 0.9, changefreq: 'daily' },
    { loc: '/states', priority: 0.9, changefreq: 'daily' }, // NEW: States directory
    { loc: '/categories', priority: 0.8, changefreq: 'daily' },
    { loc: '/companies', priority: 0.8, changefreq: 'weekly' }, // NEW: Companies directory
    { loc: '/vehicles', priority: 0.8, changefreq: 'weekly' }, // NEW: Vehicles directory
    { loc: '/saving-tips', priority: 0.85, changefreq: 'weekly' }, // NEW: Money-saving tips
    { loc: '/tools', priority: 0.8, changefreq: 'weekly' },
    { loc: '/about', priority: 0.7, changefreq: 'monthly' },
    { loc: '/contact', priority: 0.6, changefreq: 'yearly' },
    { loc: '/privacy', priority: 0.5, changefreq: 'yearly' },
    { loc: '/disclaimer', priority: 0.5, changefreq: 'yearly' },
  ];

  const staticMap = staticPages
    .map((page) => `
      <url>
        <loc>${new URL(page.loc, site).href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page.priority}</priority>
        <changefreq>${page.changefreq}</changefreq>
      </url>
    `)
    .join('\n');

  // 7. Final XML with ALL insurance content
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticMap}
  ${categoryMap}
  ${postsMap}
  ${statesMap}
</urlset>`.trim();

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
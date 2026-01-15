import { g as getCollection } from '../chunks/_astro_content_DNkqUFJX.mjs';
export { renderers } from '../renderers.mjs';

const GET = async ({ site }) => {
  if (!site) {
    return new Response("Sitemap generation failed: Site URL not set", { status: 500 });
  }
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const states = await getCollection("states", ({ data }) => !data.draft);
  await getCollection("vehicles", ({ data }) => !data.draft);
  await getCollection("companies", ({ data }) => !data.draft);
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
  const postsMap = posts.map((post) => {
    const lastModDate = post.data.updatedDate ?? post.data.date;
    const lastMod = lastModDate ? new Date(lastModDate).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    return `
        <url>
          <loc>${new URL(`/blog/${post.slug}`, site).href}</loc>
          <lastmod>${lastMod}</lastmod>
          <priority>0.8</priority>
          <changefreq>weekly</changefreq>
        </url>
      `;
  }).join("\n");
  const statesMap = states.map((state) => {
    const lastModDate = state.data.updatedDate ?? state.data.date;
    const lastMod = lastModDate ? new Date(lastModDate).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
    return `
        <url>
          <loc>${new URL(`/states/${state.data.state}/car-insurance`, site).href}</loc>
          <lastmod>${lastMod}</lastmod>
          <priority>0.9</priority> <!-- HIGH priority for state pages -->
          <changefreq>monthly</changefreq>
        </url>
      `;
  }).join("\n");
  const categoryMap = insuranceCategories.map((category) => `
      <url>
        <loc>${new URL(`/categories/${category}`, site).href}</loc>
        <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
        <priority>0.8</priority>
        <changefreq>weekly</changefreq>
      </url>
    `).join("\n");
  const staticPages = [
    { loc: site.href, priority: 1, changefreq: "daily" },
    // Homepage
    { loc: "/blog", priority: 0.9, changefreq: "daily" },
    { loc: "/states", priority: 0.9, changefreq: "daily" },
    // NEW: States directory
    { loc: "/categories", priority: 0.8, changefreq: "daily" },
    { loc: "/companies", priority: 0.8, changefreq: "weekly" },
    // NEW: Companies directory
    { loc: "/vehicles", priority: 0.8, changefreq: "weekly" },
    // NEW: Vehicles directory
    { loc: "/saving-tips", priority: 0.85, changefreq: "weekly" },
    // NEW: Money-saving tips
    { loc: "/tools", priority: 0.8, changefreq: "weekly" },
    { loc: "/about", priority: 0.7, changefreq: "monthly" },
    { loc: "/contact", priority: 0.6, changefreq: "yearly" },
    { loc: "/privacy", priority: 0.5, changefreq: "yearly" },
    { loc: "/disclaimer", priority: 0.5, changefreq: "yearly" }
  ];
  const staticMap = staticPages.map((page) => `
      <url>
        <loc>${new URL(page.loc, site).href}</loc>
        <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
        <priority>${page.priority}</priority>
        <changefreq>${page.changefreq}</changefreq>
      </url>
    `).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticMap}
  ${categoryMap}
  ${postsMap}
  ${statesMap}
</urlset>`.trim();
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

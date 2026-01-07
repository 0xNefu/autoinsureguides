// src/pages/rss.xml.ts - INSURANCE RSS FEED
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("Site URL not configured", { status: 500 });
  }

  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return rss({
    title: "AutoInsureGuides – Expert Auto Insurance Tips",
    description: "Money-saving strategies, coverage guides, and insurance comparisons. Learn how to get the best auto insurance rates and maximize your coverage.",
    site: site,
    stylesheet: false,
    customData: `<language>en-us</language>
<category>Auto Insurance</category>
<category>Personal Finance</category>
<category>Money Saving Tips</category>
<generator>Astro</generator>
<ttl>60</ttl>`,
    items: posts.map((post) => {
      const postSlug = post.id.replace(/\.md$/, '');
      const link = new URL(`/blog/${postSlug}/`, site).href;

      return {
        title: String(post.data.title || "Untitled Post"),
        description: String(post.data.description || "Expert auto insurance tips and money-saving strategies from AutoInsureGuides."),
        link: link,
        date: new Date(post.data.date).toISOString(),
        categories: post.data.category ? [post.data.category] : [],
        author: "AutoInsureGuides Team",
      };
    }),
  });
};
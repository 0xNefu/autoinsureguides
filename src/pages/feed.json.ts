// src/pages/feed.json.ts - INSURANCE FEED
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response('Site URL not configured', { status: 500 });
  }

  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const items = posts
    .map((post) => {
      const path = post.slug;
      const url = new URL(`/blog/${path}/`, site).href;

      const imageUrl = post.data.image
        ? new URL(
            post.data.image.startsWith('/') ? post.data.image.slice(1) : post.data.image,
            site
          ).href
        : undefined;

      return {
        id: url,
        url,
        title: String(post.data.title || 'Untitled Post'),
        summary: String(post.data.description || 'Expert auto insurance tips and money-saving strategies from AutoInsureGuides.'),
        date_published: new Date(post.data.date).toISOString(),
        image: imageUrl,
        category: post.data.category ? [String(post.data.category)] : [],
      };
    })
    .sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

  return new Response(
    JSON.stringify(
      {
        version: 'https://jsonfeed.org/version/1.1',
        title: 'AutoInsureGuides – Expert Auto Insurance Resources',
        description: 'Money-saving tips, coverage guides, and insurance comparisons for smart drivers.',
        home_page_url: site.href,
        feed_url: new URL('/feed.json', site).href,
        icon: new URL('/favicon.ico', site).href,
        favicon: new URL('/favicon.ico', site).href,
        authors: [
          {
            name: 'AutoInsureGuides Team',
            url: site.href,
          }
        ],
        language: 'en-US',
        items,
      },
      null,
      2
    ),
    {
      headers: {
        'Content-Type': 'application/feed+json; charset=utf-8',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      },
    }
  );
};

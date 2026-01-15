/* empty css                                  */
import { c as createComponent, f as renderHead, a as renderTemplate, r as renderComponent, F as Fragment, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
/* empty css                             */

const $$RssDebug = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const brokenPosts = posts.filter((post) => {
    const desc = (post.data.description || "").toString().trim();
    const excerpt = (post.data.excerpt || "").toString().trim();
    return !desc && !excerpt;
  }).map((post) => ({
    file: post.id,
    title: post.data.title || "(no title)",
    slug: post.slug || post.id.replace(/\.(md|mdx)$/, "")
  }));
  return renderTemplate`<html lang="en" data-astro-cid-vrei4cx2> <head><meta charset="utf-8"><title>RSS Debug – autoinsureguides</title>${renderHead()}</head> <body data-astro-cid-vrei4cx2> <h1 data-astro-cid-vrei4cx2>RSS Debug – Posts missing description/excerpt</h1> ${brokenPosts.length === 0 ? renderTemplate`<p style="color:#00ff99; font-size:1.5rem;" data-astro-cid-vrei4cx2>
All posts have a description or excerpt. Your RSS should work perfectly now!
</p>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-vrei4cx2": true }, { "default": async ($$result2) => renderTemplate` <p data-astro-cid-vrei4cx2>Found <strong data-astro-cid-vrei4cx2>${brokenPosts.length}</strong> post(s) that will break the RSS feed:</p> <table data-astro-cid-vrei4cx2> <thead data-astro-cid-vrei4cx2> <tr data-astro-cid-vrei4cx2> <th data-astro-cid-vrei4cx2>File</th> <th data-astro-cid-vrei4cx2>Title</th> <th data-astro-cid-vrei4cx2>Slug / URL</th> </tr> </thead> <tbody data-astro-cid-vrei4cx2> ${brokenPosts.map((post) => renderTemplate`<tr data-astro-cid-vrei4cx2> <td data-astro-cid-vrei4cx2><code data-astro-cid-vrei4cx2>${post.file}</code></td> <td data-astro-cid-vrei4cx2>${post.title}</td> <td data-astro-cid-vrei4cx2><a${addAttribute(`https://autoinsureguides.com/${post.slug}/`, "href")} target="_blank" data-astro-cid-vrei4cx2> ${post.slug || "(no slug)"} </a></td> </tr>`)} </tbody> </table> <p style="margin-top:2rem;" data-astro-cid-vrei4cx2>
Just open each file and add one of these lines to the frontmatter:
<br data-astro-cid-vrei4cx2><code data-astro-cid-vrei4cx2>description: "Your 1-2 sentence summary here"</code> <br data-astro-cid-vrei4cx2>or
<br data-astro-cid-vrei4cx2><code data-astro-cid-vrei4cx2>excerpt: "Short teaser here"</code> </p> ` })}`} </body></html>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/rss-debug.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/rss-debug.astro";
const $$url = "/rss-debug";

const __vite_glob_0_31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RssDebug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_31 as _ };

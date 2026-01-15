/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { $ as $$PostCard } from './PostCard_B1uSlNYb.mjs';
import { s as slugify, g as getSinglePage, h as humanize } from './contentParser_l4ZH9VmO.mjs';
import { g as getTaxonomy } from './taxonomyParser_D7o3CrQY.mjs';
import { s as sortByDate } from './sortFunctions_DN17Ikpp.mjs';

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro();
async function getStaticPaths() {
  const tags = await getTaxonomy("posts", "tags");
  return tags.map((tag) => {
    return {
      params: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const posts = await getSinglePage("posts");
  const filterByTags = taxonomyFilter(posts, "tags", tag);
  const sortedPosts = sortByDate(filterByTags);
  const title = humanize(tag || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title || "Tag" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center text-2xl mb-4">Showing Posts From</p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> <!-- Posts Grid using your original PostCard design --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${sortedPosts.length > 0 ? sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`) : renderTemplate`<p class="col-span-full text-center text-gray-500 py-12">
No posts found with this tag.
</p>`} </div> </div> </div> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

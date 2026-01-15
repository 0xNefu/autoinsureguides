/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$PostCard } from './PostCard_B1uSlNYb.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { C as CATEGORY_HIERARCHY } from './categories_BfLSlxoM.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const categories = Object.keys(CATEGORY_HIERARCHY);
  console.log("DEBUG: Generating paths for categories:", categories);
  return categories.map((category) => ({
    params: { category }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { category } = Astro2.params;
  console.log("DEBUG: Current category param:", category);
  const allPosts = await getCollection("posts");
  console.log("DEBUG: Total posts loaded:", allPosts.length);
  const categoryPosts = allPosts.filter((post) => {
    if (post.data.draft) {
      console.log(`Post: ${post.id} is a DRAFT - skipping`);
      return false;
    }
    const postCategory = post.data.category;
    const matches = postCategory === category;
    console.log(`Post: ${post.id}, Category: "${postCategory}", Looking for: "${category}", Matches: ${matches}`);
    return matches;
  }).sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  console.log(`DEBUG: Found ${categoryPosts.length} posts in category "${category}"`);
  const categoryData = CATEGORY_HIERARCHY[category];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <header class="mb-12"> <div class="flex items-center gap-4 mb-4"> <span class="text-4xl">${categoryData?.icon || "\u{1F4C1}"}</span> <h1 class="text-4xl font-bold dark:text-white text-gray-900"> ${categoryData?.name || category} </h1> </div> ${categoryData?.description && renderTemplate`<p class="text-xl dark:text-gray-400 text-gray-600 max-w-3xl"> ${categoryData.description} </p>`} <div class="mt-8"> <p class="text-lg dark:text-white text-gray-900"> <span class="font-semibold">${categoryPosts.length}</span> ${categoryPosts.length === 1 ? " post" : " posts"} in this category
</p> </div> </header> ${categoryPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${categoryPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">📭</div> <h2 class="text-2xl font-semibold mb-2 dark:text-white text-gray-900">No posts found</h2> <p class="dark:text-gray-400 text-gray-600 max-w-md mx-auto">
No posts in the "${categoryData?.name || category}" category yet.
          Check back soon or browse other categories.
</p> </div>`} </div> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/categories/[category]/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/categories/[category]/index.astro";
const $$url = "/categories/[category]";

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_17 as _ };

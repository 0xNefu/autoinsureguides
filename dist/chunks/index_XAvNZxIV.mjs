/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$PostCard } from './PostCard_B1uSlNYb.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { C as CATEGORY_HIERARCHY } from './categories_BfLSlxoM.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  for (const [categorySlug, categoryData] of Object.entries(CATEGORY_HIERARCHY)) {
    for (const [subcategorySlug, subcategoryName] of Object.entries(categoryData.subcategories)) {
      paths.push({
        params: {
          category: categorySlug,
          subcategory: subcategorySlug
        }
      });
    }
  }
  console.log(`DEBUG: Generated ${paths.length} subcategory paths`);
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { category, subcategory } = Astro2.params;
  const allPosts = await getCollection("posts");
  const subcategoryPosts = allPosts.filter((post) => {
    const matches = post.data.category === category && post.data.subcategory === subcategory && !post.data.draft;
    if (matches) {
      console.log(`Found post for ${category}/${subcategory}: ${post.id}`);
    }
    return matches;
  }).sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  const categoryData = CATEGORY_HIERARCHY[category];
  const subcategoryName = categoryData?.subcategories[subcategory] || subcategory;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <!-- Breadcrumb --> <nav class="mb-8 text-sm text-gray-600 dark:text-gray-400"> <a href="/" class="hover:text-blue-600 dark:hover:text-blue-400">Home</a> <span class="mx-2">›</span> <a${addAttribute(`/categories/${category}`, "href")} class="hover:text-blue-600 dark:hover:text-blue-400"> ${categoryData?.name || category} </a> <span class="mx-2">›</span> <span class="text-gray-900 dark:text-gray-300 font-medium">${subcategoryName}</span> </nav> <header class="mb-12"> <h1 class="text-4xl font-bold mb-4"> ${categoryData?.icon || "\u{1F4C1}"} ${subcategoryName} </h1> <p class="text-xl text-gray-600 dark:text-gray-400">
Posts in <span class="font-semibold">${categoryData?.name || category}</span> › <span class="font-semibold">${subcategoryName}</span> </p> <div class="mt-8"> <p class="text-lg"> <span class="font-semibold">${subcategoryPosts.length}</span> ${subcategoryPosts.length === 1 ? " post" : " posts"} in this subcategory
</p> </div> </header> ${subcategoryPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${subcategoryPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div>` : renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">📭</div> <h2 class="text-2xl font-semibold mb-2">No posts found</h2> <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
No posts in the "${subcategoryName}" subcategory yet.
<a${addAttribute(`/categories/${category}`, "href")} class="text-blue-600 dark:text-blue-400 hover:underline ml-1">
Browse all ${categoryData?.name || category} posts
</a> </p> </div>`} </div> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/categories/[category]/[subcategory]/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/categories/[category]/[subcategory]/index.astro";
const $$url = "/categories/[category]/[subcategory]";

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_16 as _ };

/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { C as CATEGORY_HIERARCHY } from './categories_BfLSlxoM.mjs';
/* empty css                                  */

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts", ({ data }) => !data.draft);
  const popularPosts = allPosts.sort((a, b) => (b.data.date || 0) - (a.data.date || 0)).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "404 - Page Not Found | AutoInsureGuides", "description": "Oops! This page doesn't exist. Browse our auto insurance guides, comparison tools, and money-saving tips.", "data-astro-cid-zetdm5md": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-gradient-to-b from-blue-50 to-white" data-astro-cid-zetdm5md> <div class="container mx-auto px-4" data-astro-cid-zetdm5md> <!-- Error Message --> <div class="text-center mb-12" data-astro-cid-zetdm5md> <div class="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-blue-100 border border-blue-300 rounded-2xl" data-astro-cid-zetdm5md> <span class="text-blue-600 text-2xl" data-astro-cid-zetdm5md>⚠️</span> <span class="text-blue-800 font-semibold" data-astro-cid-zetdm5md>PAGE NOT FOUND</span> </div> <h1 class="text-5xl md:text-7xl font-black mb-4" data-astro-cid-zetdm5md> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600" data-astro-cid-zetdm5md>
404
</span> </h1> <p class="text-2xl md:text-3xl text-gray-900 mb-4 max-w-3xl mx-auto" data-astro-cid-zetdm5md>
This insurance page couldn't be located
</p> <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto" data-astro-cid-zetdm5md>
The page you're looking for doesn't exist. Don't worry - we've got plenty of insurance guides to help you save money.
</p>  <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-astro-cid-zetdm5md> <a href="/" class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-zetdm5md> <span class="relative z-10" data-astro-cid-zetdm5md>🏠 Return to Homepage</span> </a> <a href="/blog" class="px-8 py-4 bg-white border-2 border-blue-300 text-blue-900 font-bold rounded-xl hover:bg-blue-50 hover:border-blue-400 transition-all duration-300" data-astro-cid-zetdm5md>
📚 Browse All Insurance Guides
</a> </div> </div>  <div class="mb-16" data-astro-cid-zetdm5md> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center" data-astro-cid-zetdm5md> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600" data-astro-cid-zetdm5md>
Explore Insurance Topics
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" data-astro-cid-zetdm5md> ${Object.entries(CATEGORY_HIERARCHY).filter(([key]) => {
    const postsInCategory = allPosts.filter((p) => p.data.category === key);
    return postsInCategory.length > 0;
  }).slice(0, 6).map(([category, data]) => {
    const postsInCategory = allPosts.filter((p) => p.data.category === category);
    return renderTemplate`<a${addAttribute(`/categories/${category}`, "href")} class="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1" data-astro-cid-zetdm5md> <div class="flex items-start gap-4 mb-4" data-astro-cid-zetdm5md> <div class="text-2xl text-blue-600" data-astro-cid-zetdm5md>${data.icon || "\u{1F4DA}"}</div> <div data-astro-cid-zetdm5md> <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors" data-astro-cid-zetdm5md> ${data.name} </h3> <p class="text-gray-500 text-sm" data-astro-cid-zetdm5md> ${postsInCategory.length} guides
</p> </div> </div> <p class="text-gray-600 text-sm mb-4 line-clamp-2" data-astro-cid-zetdm5md> ${data.description} </p> <div class="flex items-center justify-between" data-astro-cid-zetdm5md> <span class="text-blue-600 text-sm font-medium" data-astro-cid-zetdm5md>
Learn more →
</span> <span class="text-gray-400 text-xs bg-blue-50 px-2 py-1 rounded" data-astro-cid-zetdm5md> ${category.includes("basics") ? "Beginner" : "Advanced"} </span> </div> </a>`;
  })} </div> <div class="text-center mt-8" data-astro-cid-zetdm5md> <a href="/categories" class="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors font-medium" data-astro-cid-zetdm5md>
View all insurance categories →
</a> </div> </div>  <div class="mb-16" data-astro-cid-zetdm5md> <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center" data-astro-cid-zetdm5md> <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600" data-astro-cid-zetdm5md>
Popular Insurance Guides
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" data-astro-cid-zetdm5md> ${popularPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1" data-astro-cid-zetdm5md> <div class="mb-4" data-astro-cid-zetdm5md> <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold" data-astro-cid-zetdm5md> ${post.data.category ? post.data.category.replace("-", " ").toUpperCase() : "GUIDE"} </span> </div> <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors line-clamp-2" data-astro-cid-zetdm5md> ${post.data.title} </h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2" data-astro-cid-zetdm5md> ${post.data.description || "Learn more about this insurance topic..."} </p> <div class="flex items-center justify-between text-sm" data-astro-cid-zetdm5md> <span class="text-gray-500" data-astro-cid-zetdm5md> ${new Date(post.data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </span> <span class="text-blue-600 font-medium" data-astro-cid-zetdm5md>
Read guide →
</span> </div> </a>`)} </div> </div>  <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 p-8 max-w-3xl mx-auto" data-astro-cid-zetdm5md> <div class="text-center" data-astro-cid-zetdm5md> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-zetdm5md>🔍 Need Insurance Help?</h3> <p class="text-gray-700 mb-6" data-astro-cid-zetdm5md>
Search our insurance guides or use our free tools to find what you need.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-zetdm5md> <a href="/search" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all" data-astro-cid-zetdm5md>
Search Insurance Articles
</a> <a href="/tools" class="px-6 py-3 bg-white border-2 border-blue-300 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors" data-astro-cid-zetdm5md>
Insurance Tools
</a> </div> <div class="mt-6 text-sm text-gray-600" data-astro-cid-zetdm5md> <p data-astro-cid-zetdm5md>Or <a href="/contact" class="text-blue-700 hover:underline font-medium" data-astro-cid-zetdm5md>contact our insurance team</a> for assistance.</p> </div> </div> </div>  <div class="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 max-w-3xl mx-auto" data-astro-cid-zetdm5md> <div class="text-center" data-astro-cid-zetdm5md> <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" data-astro-cid-zetdm5md> <span class="text-2xl" data-astro-cid-zetdm5md>💰</span> </div> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-zetdm5md>Calculate Your Insurance Savings</h3> <p class="text-gray-600 mb-4" data-astro-cid-zetdm5md>Use our free calculator to estimate how much you could save.</p> <a href="/tools/calculator" class="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all" data-astro-cid-zetdm5md>
Try Savings Calculator
</a> </div> </div> </div> </section>  ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/404.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/404.astro";
const $$url = "/404";

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_0 as _ };

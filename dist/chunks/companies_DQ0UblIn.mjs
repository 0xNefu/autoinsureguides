/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';

const $$Companies = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("companies", ({ data }) => !data.draft);
  const topCompanies = [
    { name: "Geico", icon: "\u{1F98E}", rating: 4.5, pros: ["Low rates", "Easy online"], color: "from-blue-100 to-cyan-100" },
    { name: "State Farm", icon: "\u{1F3E2}", rating: 4.3, pros: ["Local agents", "Bundle deals"], color: "from-red-100 to-pink-100" },
    { name: "Progressive", icon: "\u{1F4CA}", rating: 4.4, pros: ["Name your price", "Snapshot"], color: "from-blue-100 to-indigo-100" },
    { name: "Allstate", icon: "\u{1F44D}", rating: 4.2, pros: ["Accident forgiveness", "Safe driving"], color: "from-blue-100 to-purple-100" },
    { name: "USAA", icon: "\u2B50", rating: 4.7, pros: ["Military only", "Best service"], color: "from-yellow-100 to-amber-100" },
    { name: "Liberty Mutual", icon: "\u{1F5FD}", rating: 4.1, pros: ["Customization", "Good discounts"], color: "from-green-100 to-emerald-100" }
  ];
  const averageSavings = "$489";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Insurance Company Reviews & Comparison | AutoInsureGuides", "description": "Unbiased reviews of top auto insurance companies. Compare rates, coverage, and customer satisfaction to find the best insurer for you." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-16 bg-gradient-to-br from-blue-50 to-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold mb-6"> <span class="text-blue-900">Insurance Company</span> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Reviews & Ratings</span> </h1> <p class="text-xl text-gray-700 mb-10">
Unbiased analysis of the top auto insurance providers. We compare rates, coverage options, customer service, and claims satisfaction to help you choose the right company.
</p> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"> <div class="bg-white/80 p-4 rounded-xl border border-blue-100"> <div class="text-2xl font-bold text-blue-900">${topCompanies.length}</div> <div class="text-sm text-blue-700">COMPANIES REVIEWED</div> </div> <div class="bg-white/80 p-4 rounded-xl border border-blue-100"> <div class="text-2xl font-bold text-blue-900">50+</div> <div class="text-sm text-blue-700">STATES COVERED</div> </div> <div class="bg-white/80 p-4 rounded-xl border border-blue-100"> <div class="text-2xl font-bold text-blue-900">250K+</div> <div class="text-sm text-blue-700">CUSTOMER REVIEWS</div> </div> <div class="bg-white/80 p-4 rounded-xl border border-blue-100"> <div class="text-2xl font-bold text-blue-900">${averageSavings}</div> <div class="text-sm text-blue-700">AVG SAVINGS</div> </div> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
Top Insurance Companies Compared
</span> </h2> <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-lg"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Company</th> <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Rating</th> <th class="px6 py-4 text-left text-sm font-bold text-gray-700">Average Premium</th> <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Best For</th> <th class="px-6 py-4 text-left text-sm font-bold text-gray-700">Review</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${topCompanies.map((company, index) => renderTemplate`<tr${addAttribute(`hover:bg-blue-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`, "class")}> <td class="px-6 py-4"> <div class="flex items-center gap-3"> <span class="text-2xl">${company.icon}</span> <div> <div class="font-bold text-gray-900">${company.name}</div> <div class="text-sm text-gray-500">Nationwide</div> </div> </div> </td> <td class="px-6 py-4"> <div class="flex items-center gap-2"> <div class="text-lg font-bold text-amber-600">${company.rating}</div> <div class="text-sm text-gray-500">/5.0</div> </div> <div class="text-xs text-gray-500">J.D. Power 2024</div> </td> <td class="px-6 py-4"> <div class="text-lg font-bold text-green-700">$1,542/yr</div> <div class="text-xs text-gray-500">National average</div> </td> <td class="px-6 py-4"> <div class="space-y-1"> ${company.pros.slice(0, 2).map((pro, idx) => renderTemplate`<div${addAttribute(idx, "key")} class="flex items-center gap-2"> <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span class="text-sm text-gray-700">${pro}</span> </div>`)} </div> </td> <td class="px-6 py-4"> <a${addAttribute(`/companies/${company.name.toLowerCase().replace(" ", "-")}`, "href")} class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
Read Full Review
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </td> </tr>`)} </tbody> </table> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
How to Choose the Right Insurance Company
</span> </h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> <div class="bg-white p-6 rounded-xl border border-gray-200"> <div class="text-3xl mb-4">💰</div> <h3 class="text-xl font-bold mb-4">Compare Rates</h3> <p class="text-gray-600 mb-4">
Get quotes from at least 3 companies. Rates can vary by 50% or more for the same coverage.
</p> <a href="/tools/rate-comparison" class="text-blue-700 font-medium text-sm">
Use our comparison tool →
</a> </div> <div class="bg-white p-6 rounded-xl border border-gray-200"> <div class="text-3xl mb-4">🏆</div> <h3 class="text-xl font-bold mb-4">Check Financial Strength</h3> <p class="text-gray-600 mb-4">
Look for A-rated companies by AM Best. This ensures they can pay claims.
</p> <a href="/blog/insurance-ratings" class="text-blue-700 font-medium text-sm">
Learn about ratings →
</a> </div> <div class="bg-white p-6 rounded-xl border border-gray-200"> <div class="text-3xl mb-4">⭐</div> <h3 class="text-xl font-bold mb-4">Read Customer Reviews</h3> <p class="text-gray-600 mb-4">
Pay attention to claims satisfaction scores and complaint ratios.
</p> <a href="/blog/customer-satisfaction" class="text-blue-700 font-medium text-sm">
What to look for →
</a> </div> </div> </div> </section>  <section class="py-12 bg-blue-50 border-t border-blue-200"> <div class="container mx-auto px-4 text-center"> <p class="text-gray-700 max-w-2xl mx-auto"> <strong>💰 Affiliate Disclosure:</strong> We may earn commission from insurance companies featured on this page. 
        This doesn't affect our editorial independence - we always provide unbiased reviews to help you make the best choice.
</p> </div> </section> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/companies.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/companies.astro";
const $$url = "/companies";

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Companies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_24 as _ };

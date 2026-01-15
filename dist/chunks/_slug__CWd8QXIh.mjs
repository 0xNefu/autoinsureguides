/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import MarkdownIt from 'markdown-it';
/* empty css                          */

const $$Astro = createAstro();
async function getStaticPaths() {
  const states = await getCollection("states");
  return states.map((state) => ({
    params: {
      state: state.data.state,
      slug: "car-insurance"
    },
    props: { stateData: state }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  });
  const { stateData } = Astro2.props;
  const renderedContent = md.render(stateData.body);
  function formatPremium(premium) {
    if (premium && premium.startsWith(",")) {
      return "$" + premium.substring(1);
    }
    if (premium && !premium.startsWith("$")) {
      return "$" + premium;
    }
    return premium || "$800/year";
  }
  const fixedRenderedContent = renderedContent.replace(/,800\/year/g, "$800/year");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${stateData.data.stateName} Car Insurance Guide | AutoInsureGuides`, "description": `Complete ${stateData.data.stateName} car insurance requirements: ${stateData.data.minimumCoverage}. Average premium: ${formatPremium(stateData.data.averagePremium)}. State-specific laws and discounts.`, "data-astro-cid-bb4gugmq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 bg-white" data-astro-cid-bb4gugmq> <div class="container mx-auto px-4" data-astro-cid-bb4gugmq> <!-- State Header --> <div class="mb-12" data-astro-cid-bb4gugmq> <div class="flex items-center gap-4 mb-6" data-astro-cid-bb4gugmq> <div class="text-4xl" data-astro-cid-bb4gugmq>🗺️</div> <div data-astro-cid-bb4gugmq> <h1 class="text-4xl font-bold text-gray-900" data-astro-cid-bb4gugmq>${stateData.data.stateName} Car Insurance</h1> <div class="text-xl text-gray-600 mt-2" data-astro-cid-bb4gugmq>Complete 2024 State Guide</div> </div> </div> <!-- Stats Cards --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10" data-astro-cid-bb4gugmq> <div class="bg-blue-50 p-6 rounded-xl border border-blue-100" data-astro-cid-bb4gugmq> <div class="text-sm text-blue-700 mb-2" data-astro-cid-bb4gugmq>Average Premium</div> <div class="text-3xl font-bold text-blue-900" data-astro-cid-bb4gugmq> ${formatPremium(stateData.data.averagePremium)} </div> <div class="text-xs text-blue-600 mt-2" data-astro-cid-bb4gugmq>Annual Estimate</div> </div> <div class="bg-green-50 p-6 rounded-xl border border-green-100" data-astro-cid-bb4gugmq> <div class="text-sm text-green-700 mb-2" data-astro-cid-bb4gugmq>Minimum Coverage</div> <div class="text-3xl font-bold text-green-900" data-astro-cid-bb4gugmq>${stateData.data.minimumCoverage}</div> <div class="text-xs text-green-600 mt-2" data-astro-cid-bb4gugmq>Required by Law</div> </div> <div class="bg-purple-50 p-6 rounded-xl border border-purple-100" data-astro-cid-bb4gugmq> <div class="text-sm text-purple-700 mb-2" data-astro-cid-bb4gugmq>State Code</div> <div class="text-3xl font-bold text-purple-900" data-astro-cid-bb4gugmq>${stateData.data.stateAbbreviation}</div> <div class="text-xs text-purple-600 mt-2" data-astro-cid-bb4gugmq>${stateData.data.stateName}</div> </div> </div> </div> <!-- Markdown Content - FIXED VERSION --> <article class="prose prose-lg max-w-none bg-gray-50 p-8 rounded-2xl border border-gray-200" data-astro-cid-bb4gugmq> <div class="markdown-content" data-astro-cid-bb4gugmq>${unescapeHTML(fixedRenderedContent)}</div> </article> <!-- CTA Section --> <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200" data-astro-cid-bb4gugmq> <h3 class="text-2xl font-bold mb-4 text-gray-900" data-astro-cid-bb4gugmq>Get ${stateData.data.stateName} Insurance Quotes</h3> <p class="text-gray-700 mb-6" data-astro-cid-bb4gugmq>Compare rates from top providers in your state.</p> <a${addAttribute(`/tools/quote-comparison?state=${stateData.data.stateAbbreviation}`, "href")} class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:shadow-lg" data-astro-cid-bb4gugmq>
🚗 Get Free ${stateData.data.stateAbbreviation} Quotes
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bb4gugmq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-bb4gugmq></path> </svg> </a> </div> <!-- Navigation --> <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-bb4gugmq> <a href="/states" class="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200" data-astro-cid-bb4gugmq> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bb4gugmq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-bb4gugmq></path> </svg>
Back to All States
</a> </div> </div> </section>  ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/states/[state]/[slug].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/states/[state]/[slug].astro";
const $$url = "/states/[state]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';

const $$States = createComponent(async ($$result, $$props, $$slots) => {
  function formatPremium(premium) {
    if (!premium) return "$---";
    if (premium.startsWith(",")) {
      return "$" + premium.substring(1);
    }
    if (!premium.startsWith("$")) {
      return "$" + premium;
    }
    return premium;
  }
  const allStates = await getCollection("states");
  const stateRegions = {
    northeast: ["CT", "ME", "MA", "NH", "RI", "VT", "NJ", "NY", "PA"],
    southeast: ["AL", "AR", "FL", "GA", "KY", "LA", "MS", "NC", "SC", "TN", "VA", "WV"],
    midwest: ["IL", "IN", "IA", "KS", "MI", "MN", "MO", "NE", "ND", "OH", "SD", "WI"],
    southwest: ["AZ", "NM", "OK", "TX"],
    west: ["AK", "CA", "CO", "HI", "ID", "MT", "NV", "OR", "UT", "WA", "WY"]
  };
  function getRegion(abbreviation) {
    for (const [region, states] of Object.entries(stateRegions)) {
      if (states.includes(abbreviation.toUpperCase())) {
        return region;
      }
    }
    return "other";
  }
  const groupedStates = {};
  allStates.forEach((state) => {
    const region = getRegion(state.data.stateAbbreviation);
    if (!groupedStates[region]) {
      groupedStates[region] = [];
    }
    groupedStates[region].push(state);
  });
  Object.keys(groupedStates).forEach((region) => {
    groupedStates[region].sort(
      (a, b) => a.data.stateName.localeCompare(b.data.stateName)
    );
  });
  const regionNames = {
    northeast: "Northeast",
    southeast: "Southeast",
    midwest: "Midwest",
    southwest: "Southwest",
    west: "West"
  };
  const publishedStates = allStates.filter((s) => !s.data.draft);
  const averagePremiumAll = publishedStates.length > 0 ? Math.round(publishedStates.reduce((sum, s) => {
    const premiumStr = s.data.averagePremium || "0";
    const premiumNum = parseFloat(premiumStr.replace(/[^0-9.-]+/g, "") || "0");
    return sum + premiumNum;
  }, 0) / publishedStates.length) : 0;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "State-Specific Car Insurance Guides | All 50 States", "description": "Find your state's car insurance requirements, average rates, minimum coverage laws, and money-saving tips. Compare insurance across all 50 states." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50"> <div class="absolute inset-0 opacity-10"> <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> <defs> <pattern id="state-grid" width="100" height="100" patternUnits="userSpaceOnUse"> <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3b82f6" stroke-width="0.5"></path> </pattern> </defs> <rect width="100%" height="100%" fill="url(#state-grid)"></rect> </svg> </div> <div class="container relative z-10 mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-6 shadow-sm"> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <span class="text-blue-700 font-semibold text-sm">
50 STATES COVERED • STATE-SPECIFIC GUIDES
</span> </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"> <span class="text-blue-900">
Car Insurance by State
</span> </h1> <p class="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
Insurance requirements and rates vary significantly by state. Find your state's minimum coverage laws, average premiums, and local discounts.
</p> <!-- Quick Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"> <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100"> <div class="text-2xl font-bold text-blue-900 mb-1">${allStates.length}</div> <div class="text-sm text-blue-700">STATES COVERED</div> </div> <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100"> <div class="text-2xl font-bold text-blue-900 mb-1">$${averagePremiumAll}</div> <div class="text-sm text-blue-700">AVG PREMIUM</div> </div> <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100"> <div class="text-2xl font-bold text-blue-900 mb-1">50</div> <div class="text-sm text-blue-700">MINIMUM LAWS</div> </div> <div class="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100"> <div class="text-2xl font-bold text-blue-900 mb-1">250+</div> <div class="text-sm text-blue-700">LOCAL DISCOUNTS</div> </div> </div> </div> </div> </section>  <section class="py-12 bg-white border-b border-gray-200"> <div class="container mx-auto px-4"> <div class="max-w-2xl mx-auto"> <div class="relative"> <input type="text" placeholder="Search for your state (e.g., California, TX, NY...)" class="w-full px-6 py-4 pl-14 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" id="stateSearch"> <svg class="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> </div> </section>  <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> ${Object.entries(groupedStates).map(([regionKey, states]) => {
    const regionAvg = Math.round(states.reduce((sum, s) => {
      const premiumStr = s.data.averagePremium || "0";
      const premiumNum = parseFloat(premiumStr.replace(/[^0-9.-]+/g, "") || "0");
      return sum + premiumNum;
    }, 0) / states.length);
    return renderTemplate`<div class="mb-16 last:mb-0"> <div class="flex items-center justify-between mb-8"> <h2 class="text-3xl font-bold text-gray-900"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> ${regionNames[regionKey] || regionKey.toUpperCase()} </span> <span class="text-gray-400 ml-3">(${states.length} states)</span> </h2> <!-- Region Average Premium --> <div class="text-right"> <div class="text-sm text-gray-500">Region Average</div> <div class="text-2xl font-bold text-blue-900">
$${regionAvg} </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"> ${states.map((state) => renderTemplate`<a${addAttribute(`/states/${state.data.state}/car-insurance`, "href")}${addAttribute(`group bg-white rounded-xl p-5 border-2 hover:border-blue-500 hover:shadow-lg transition-all ${state.data.draft ? "border-dashed border-gray-300 opacity-75" : "border-gray-200"}`, "class")}${addAttribute(state.data.stateName, "data-state-name")}${addAttribute(state.data.stateAbbreviation, "data-state-abbr")}> <div class="flex items-start justify-between mb-3"> <div> <div class="flex items-center gap-2 mb-2"> <!-- SVG Map Icon --> <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> ${state.data.draft && renderTemplate`<span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
DRAFT
</span>`} </div> <h3 class="text-lg font-bold text-gray-900 group-hover:text-blue-700"> ${state.data.stateName} </h3> <div class="text-sm text-gray-500 mt-1"> ${state.data.stateAbbreviation} </div> </div> <div class="text-right"> <div class="text-xs text-gray-500 mb-1">Average</div> <div class="text-lg font-bold text-green-700"> ${formatPremium(state.data.averagePremium)} </div> </div> </div> <div class="space-y-3"> <div> <div class="text-xs text-gray-500 mb-1">Minimum Coverage</div> <div class="text-sm font-mono font-bold text-gray-800"> ${state.data.minimumCoverage || "15/30/5"} </div> </div> <div> <div class="text-xs text-gray-500 mb-1">Required Coverage</div> <div class="text-sm text-gray-700"> ${state.data.mandatoryCoverage && state.data.mandatoryCoverage.length > 0 ? state.data.mandatoryCoverage.slice(0, 2).join(", ") : "Liability"} ${state.data.mandatoryCoverage && state.data.mandatoryCoverage.length > 2 && "..."} </div> </div> </div> <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between"> <span class="text-blue-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
View state guide
<svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </span> ${state.data.draft ? renderTemplate`<span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
Coming soon
</span>` : renderTemplate`<span class="text-xs text-green-700 bg-green-100 px-2 py-1 rounded"> <svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Published
</span>`} </div> </a>`)} </div> </div>`;
  })} <!-- No Results Message --> <div id="noResults" class="hidden text-center py-16"> <svg class="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path> </svg> <h3 class="text-2xl font-bold text-gray-500 mb-4">State Not Found</h3> <p class="text-gray-400 max-w-md mx-auto">
We couldn't find that state in our directory. Try searching by full state name or two-letter abbreviation.
</p> </div> </div> </section>  <section class="py-16 bg-white"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-6"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
State Insurance Requirements Comparison
</span> </h2> <p class="text-gray-600 max-w-2xl mx-auto">
Quickly compare minimum coverage requirements across states
</p> </div> <div class="overflow-x-auto rounded-xl border border-gray-200"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">State</th> <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Minimum Coverage</th> <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Average Premium</th> <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Required Coverage</th> <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${allStates.slice(0, 10).map((state) => renderTemplate`<tr class="hover:bg-blue-50 transition-colors"> <td class="px-6 py-4 whitespace-nowrap"> <a${addAttribute(`/states/${state.data.state}/car-insurance`, "href")} class="flex items-center gap-3 group"> <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <div> <div class="font-bold text-gray-900 group-hover:text-blue-700"> ${state.data.stateName} </div> <div class="text-sm text-gray-500">${state.data.stateAbbreviation}</div> </div> </a> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="font-mono font-bold text-gray-900">${state.data.minimumCoverage || "15/30/5"}</div> <div class="text-xs text-gray-500">Bodily/Property Damage</div> </td> <td class="px-6 py-4 whitespace-nowrap"> <div class="text-lg font-bold text-green-700">${formatPremium(state.data.averagePremium)}</div> <div class="text-xs text-gray-500">per year</div> </td> <td class="px-6 py-4"> <div class="text-sm text-gray-700"> ${state.data.mandatoryCoverage && state.data.mandatoryCoverage.length > 0 ? state.data.mandatoryCoverage.slice(0, 3).map((coverage, idx) => renderTemplate`<span${addAttribute(idx, "key")} class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"> ${coverage} </span>`) : "Liability"} </div> </td> <td class="px-6 py-4 whitespace-nowrap"> ${state.data.draft ? renderTemplate`<span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
Draft
</span>` : renderTemplate`<span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
Published
</span>`} </td> </tr>`)} </tbody> </table> </div> ${allStates.length > 10 && renderTemplate`<div class="text-center mt-8"> <a href="#full-table" class="text-blue-700 hover:text-blue-900 font-medium">
View all ${allStates.length} states in comparison table →
</a> </div>`} </div> </section>  <section class="py-16 bg-gradient-to-r from-blue-50 to-cyan-50"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-6"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
State-Specific Savings Tips
</span> </h2> <p class="text-gray-600 max-w-2xl mx-auto">
Every state has unique discounts and requirements that can help you save money
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"> <div class="bg-white rounded-xl p-6 border border-gray-200"> <svg class="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-xl font-bold text-gray-900 mb-3">Know Your State Laws</h3> <p class="text-gray-600 mb-4">
Understanding your state's minimum requirements helps you avoid overpaying for unnecessary coverage.
</p> <a href="/blog/state-requirements-guide" class="text-blue-700 text-sm font-medium">
Read guide →
</a> </div> <div class="bg-white rounded-xl p-6 border border-gray-200"> <svg class="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="text-xl font-bold text-gray-900 mb-3">Local Discounts</h3> <p class="text-gray-600 mb-4">
Many states offer specific discounts for residents like good driver, student, or military discounts.
</p> <a href="/blog/local-discounts" class="text-blue-700 text-sm font-medium">
Find discounts →
</a> </div> <div class="bg-white rounded-xl p-6 border border-gray-200"> <svg class="w-12 h-12 text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> <h3 class="text-xl font-bold text-gray-900 mb-3">Compare Rates</h3> <p class="text-gray-600 mb-4">
Premiums vary by state. Compare rates in your state to ensure you're getting the best deal.
</p> <a href="/tools/rate-comparison" class="text-blue-700 text-sm font-medium">
Compare now →
</a> </div> </div> </div> </section>  <section class="py-16 bg-gradient-to-r from-blue-900 to-blue-800"> <div class="container mx-auto px-4 text-center text-white"> <h2 class="text-3xl md:text-4xl font-bold mb-6">
Find Your State's Requirements
</h2> <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
Get detailed information about car insurance laws, average rates, and money-saving tips for your specific state.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"> <a href="#state-search" class="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg>
SEARCH FOR YOUR STATE
</a> <a href="/blog/state-insurance-guide" class="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg>
READ STATE GUIDE
</a> </div> </div> </section>   ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/states.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/states.astro";
const $$url = "/states";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$States,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

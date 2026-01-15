/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Legal Disclaimer | AutoInsureGuides", "description": "Important legal disclosures and terms of use for AutoInsureGuides.com" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-4 max-w-4xl"> <h1 class="text-4xl font-bold mb-8 text-gray-900">Legal Disclaimer</h1> <div class="prose prose-lg max-w-none"> <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8"> <p class="font-bold text-yellow-800">⚠️ IMPORTANT DISCLAIMER</p> <p class="text-yellow-700">
AutoInsureGuides provides educational content only. We are not licensed insurance agents, brokers, or financial advisors. 
            Always consult with licensed professionals for personalized insurance advice.
</p> </div> <h2 class="text-2xl font-bold mt-8 mb-4">1. No Professional Advice</h2> <p>The content on this website is for informational purposes only and does not constitute professional insurance, financial, or legal advice.</p> <h2 class="text-2xl font-bold mt-8 mb-4">2. Accuracy of Information</h2> <p>While we strive for accuracy, insurance rates, laws, and regulations change frequently. Verify information with your state's insurance department.</p> <h2 class="text-2xl font-bold mt-8 mb-4">3. Affiliate Disclosure</h2> <p>We may earn commission from insurance companies through affiliate links. This supports our operations but doesn't affect our editorial independence.</p> <h2 class="text-2xl font-bold mt-8 mb-4">4. No Guarantees</h2> <p>We don't guarantee specific savings, rates, or coverage availability. Individual results vary based on location, driving history, and other factors.</p> <h2 class="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2> <p>AutoInsureGuides and its authors are not liable for any insurance decisions made based on information from this website.</p> <div class="mt-12 pt-8 border-t border-gray-200"> <p class="text-gray-600 text-sm">
Last updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} </p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/disclaimer.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const __vite_glob_0_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_26 as _ };

/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2">Authors</h1> <p>Author pages are temporarily unavailable.</p> </div> </section> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/authors/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/authors/index.astro";
const $$url = "/authors";

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_6 as _ };

/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { g as getTaxonomy } from './taxonomyParser_D7o3CrQY.mjs';
import { h as humanize } from './contentParser_l4ZH9VmO.mjs';
import { FaHashtag } from 'react-icons/fa';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tags = await getTaxonomy("posts", "tags");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tags" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">Tags</h1> <ul class="space-x-4"> ${tags.map((tag) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/tags/${tag}`, "href")} class="rounded-lg bg-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group"> ${renderComponent($$result2, "FaHashtag", FaHashtag, { "className": "mr-1 text-primary group-hover:text-white transition" })} ${humanize(tag || "")} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

/* empty css                                  */
import { c as createComponent, d as createAstro, f as renderHead, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  for (const pillar of VALID_PILLARS) {
    try {
      const articles = await getCollection(pillar);
      for (const article of articles) {
        paths.push({
          params: { pillar, subcategory: article.data.subcategory, slug: article.slug },
          props: { article }
        });
      }
    } catch (error) {
      console.log(`No articles in ${pillar} collection yet`);
    }
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { article } = Astro2.props;
  const { pillar } = Astro2.params;
  return renderTemplate`<html> <head><title>${article.data.title}</title>${renderHead()}</head> <body> <h1>${article.data.title}</h1> <p>Pillar: ${pillar}</p> <p>Subcategory: ${article.data.subcategory}</p> <div>${article.body}</div> </body></html>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/[pillar]/[subcategory]/[slug].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/[pillar]/[subcategory]/[slug].astro";
const $$url = "/blog/[pillar]/[subcategory]/[slug]";

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_10 as _ };

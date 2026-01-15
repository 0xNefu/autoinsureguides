/* empty css                                  */
import { c as createComponent, d as createAstro, f as renderHead, r as renderComponent, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const paths = [];
  for (const pillar of VALID_PILLARS) {
    try {
      const articles = await getCollection(pillar);
      for (const article of articles) {
        paths.push({
          params: {
            pillar,
            subcategory: article.data.subcategory,
            slug: article.slug
          },
          props: { article }
        });
      }
    } catch (error) {
      console.log(`No articles in ${pillar} collection yet`);
    }
  }
  return paths;
}
const $$TempSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TempSlug;
  const { article } = Astro2.props;
  const { Content } = await article.render();
  const { pillar } = Astro2.params;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${article.data.title} | AutoInsureGuides</title>${renderHead()}</head> <body> <main> <article> <h1>${article.data.title}</h1> ${renderComponent($$result, "Content", Content, {})} </article> </main> </body></html>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/[pillar]/[subcategory]/temp_slug.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/[pillar]/[subcategory]/temp_slug.astro";
const $$url = "/blog/[pillar]/[subcategory]/temp_slug";

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TempSlug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_11 as _ };

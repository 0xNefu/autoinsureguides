/* empty css                                  */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { $ as $$Pagination } from './Pagination_B4Al2mj3.mjs';
import { $ as $$Posts } from './Posts_DeO1jOO3.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = await getCollection("posts", ({ data }) => !data.draft);
  const postsPerPage = 7;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const paths = [];
  for (let page = 2; page <= totalPages; page++) {
    paths.push({
      params: { slug: page.toString() },
      props: { page }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { page = 1 } = Astro2.props;
  const allPosts = await getCollection("posts", ({ data }) => !data.draft);
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  const postsPerPage = 7;
  const start = (Number(page) - 1) * postsPerPage;
  const currentPosts = sortedPosts.slice(start, start + postsPerPage);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Blog Page ${page}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <!-- CHANGED: Use Posts component instead of inline HTML --> ${renderComponent($$result2, "Posts", $$Posts, { "posts": currentPosts, "className": "mb-16" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages, "currentPage": Number(page) })} </div> </section> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/page/[slug].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/page/[slug].astro";
const $$url = "/page/[slug]";

const __vite_glob_0_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_28 as _ };

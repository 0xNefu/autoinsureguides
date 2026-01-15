/* empty css                                  */
import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { m as markdownify, g as getSinglePage } from './contentParser_l4ZH9VmO.mjs';
import '@astrojs/internal-helpers/path';
import { Image as $$Image } from './_astro_assets_DuyXXWzV.mjs';
import { BsArrowRightCircle } from 'react-icons/bs';
import { c as config, $ as $$Base } from './Base_CKfait4E.mjs';
import { $ as $$Pagination } from './Pagination_B4Al2mj3.mjs';
import { s as sortByDate } from './sortFunctions_DN17Ikpp.mjs';

const $$Astro$1 = createAstro();
const $$Authors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Authors;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row justify-center"> ${authors.map((author) => renderTemplate`<div class="col-12 mb-8 sm:col-6 md:col-4"> ${author.data.image && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 150, "width": 150, "class": "mx-auto rounded-lg" })} </div>`} <h3 class="h4 mt-8 mb-3"> <a${addAttribute(`/authors/${author.id}`, "href")} class="block hover:text-primary transition duration-200"> ${author.data.title} </a> </h3> ${author.body && renderTemplate`<p class="mb-3">${markdownify(author.body.slice(0, 100))}</p>`} <a${addAttribute(`/authors/${author.id}`, "href")} class="inline-flex items-center text-primary transition duration-200 hover:opacity-70">
Read More ${renderComponent($$result, "BsArrowRightCircle", BsArrowRightCircle, { "className": "inline ml-2" })} </a> </div>`)} </div>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/layouts/components/Authors.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": currentPage, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/authors/page/[slug].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/authors/page/[slug].astro";
const $$url = "/authors/page/[slug]";

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_7 as _ };

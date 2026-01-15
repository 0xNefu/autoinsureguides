import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getSinglePage, p as plainify, s as slugify, h as humanize } from './contentParser_l4ZH9VmO.mjs';
import { d as dateFormat } from './dateFormat_Ch5UtllK.mjs';
import '@astrojs/internal-helpers/path';
import { Image as $$Image } from './_astro_assets_DuyXXWzV.mjs';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const authors = await getSinglePage("authors");
  const { className, posts, fluid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`row gy-5 gx-4 ${className} ${posts.length == 1 ? "justify-center" : ""}`, "class")}> ${posts && posts.map((post, i) => renderTemplate`<div${addAttribute(i === 0 && fluid !== false ? "col-12" : "col-12 sm:col-6", "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.03] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": i === 0 ? 925 : 445, "height": i === 0 ? 475 : 230 })} </a>`} <ul class="mt-6 mb-4 flex flex-wrap items-center text-text"> <li class="mr-5"> ${authors.filter(
    (author) => post.data.authors?.map((auth) => slugify(auth)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mr-5 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-5 w-5 text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mr-5 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[18px] w-[18px] text-gray-600" })} ${post.data.category && renderTemplate`<a${addAttribute(`/categories/${slugify(post.data.category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(post.data.category)} </a>`} </li> </ul> <h3 class="mb-4"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> <p class="text-text line-clamp-2">${plainify(post.body ?? "")}</p> </div>`)} </div>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/layouts/components/Posts.astro", void 0);

export { $$Posts as $ };

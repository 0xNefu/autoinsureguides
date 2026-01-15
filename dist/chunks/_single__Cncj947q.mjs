/* empty css                                  */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as createAstro, u as unescapeHTML, r as renderComponent } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { d as dateFormat } from './dateFormat_Ch5UtllK.mjs';
import '@astrojs/internal-helpers/path';
import { Image as $$Image } from './_astro_assets_DuyXXWzV.mjs';
import { s as sortByDate } from './sortFunctions_DN17Ikpp.mjs';
import { m as markdownify, s as slugify, g as getSinglePage, h as humanize } from './contentParser_l4ZH9VmO.mjs';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';
import 'clsx';
import { r as renderEntry, g as getCollection } from './_astro_content_DNkqUFJX.mjs';

const main = [
	{
		name: "Twitter",
		icon: "FaXTwitter",
		link: "https://twitter.com/autoinsureguides",
		description: "Follow us on Twitter for insurance tips and updates"
	}
];
const social = {
	main: main
};

const $$Social = createComponent(($$result, $$props, $$slots) => {
  const links = social?.main || [];
  const icons = {
    FaXTwitter: {
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      viewBox: "0 0 24 24"
    },
    FaInstagram: {
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      viewBox: "0 0 24 24"
    },
    FaYoutube: {
      path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
      viewBox: "0 0 24 24"
    },
    FaTelegram: {
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.06-.2-.08-.06-.19-.04-.27-.02-.12.02-1.99 1.26-5.63 3.7-.53.37-1.01.56-1.45.54-.48-.02-1.4-.27-2.08-.5-.84-.27-1.51-.42-1.45-.89.03-.24.37-.49 1.03-.75 4.13-1.81 6.88-3.01 8.26-3.6 3.9-1.66 4.71-1.95 5.24-1.96.11 0 .37.03.53.17.14.13.18.3.2.53.02.26.03.85.03 1.56z",
      viewBox: "0 0 24 24"
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center space-x-6"> ${links?.map?.((link) => {
    const iconData = icons[link.icon];
    return renderTemplate`<a${addAttribute(link.link, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors"${addAttribute(`Visit our ${link.name}`, "aria-label")}${addAttribute(link.name, "title")}> ${iconData ? renderTemplate`<svg class="w-6 h-6" fill="currentColor"${addAttribute(iconData.viewBox, "viewBox")} aria-hidden="true"> <path${addAttribute(iconData.path, "d")}></path> </svg>` : renderTemplate`<span class="text-lg font-medium">${link.name}</span>`} </a>`;
  })} </div>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/components/social.astro", void 0);

const $$Astro$1 = createAstro();
const $$AuthorSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AuthorSingle;
  const { author } = Astro2.props;
  const { title, image, social } = author.data;
  const { Content } = await renderEntry(author);
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="mb-4 text-center md:px-24"> ${image && renderTemplate`<div class="mb-8"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "mx-auto rounded-lg", "height": 150, "width": 150, "alt": title })} </div>`} <h1 class="page-heading h2 mb-8">${unescapeHTML(markdownify(title))}</h1> ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons-simple" })} <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </div> </section>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/layouts/partials/AuthorSingle.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const paths = authors.map((author) => ({
    params: { single: author.slug || slugify(author.data.title) },
    props: { author }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { author } = Astro2.props;
  const { title, meta_title, description, image } = author.data;
  const allPosts = await getCollection("posts", ({ data }) => !data.draft);
  const sortedPosts = sortByDate(allPosts);
  const currentPosts = sortedPosts.filter((post) => {
    return post.data.authors?.map((auth) => slugify(auth)).includes(slugify(title));
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "AuthorSingle", $$AuthorSingle, { "author": author })} ${currentPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h3">Recent Posts</h2> <div${addAttribute(`row gy-4 ${currentPosts.length < 3 ? "justify-center" : ""}`, "class")}> ${currentPosts.map((post) => renderTemplate`<div class="col-12 sm:col-6 lg:col-4"> ${post.data.image && renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result2, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230 })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result2, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result2, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} <ul> ${post.data.categories?.map((category, i) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i !== post.data.categories.length - 1 && ","} </a> </li>`)} </ul> </li> </ul> <h3 class="h5"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> </div>`)} </div> </div> </section>`}` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/authors/[single].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/authors/[single].astro";
const $$url = "/authors/[single]";

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_5 as _ };

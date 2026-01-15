import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const { title, description, date, category, subcategory, image } = post.data;
  const { slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  return renderTemplate`<!-- src/components/PostCard.astro -->${maybeRenderHead()}<article class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow" data-astro-cid-iyiqi2so> <!-- HERO IMAGE SECTION - ADDED --> ${image && renderTemplate`<div class="h-48 overflow-hidden" data-astro-cid-iyiqi2so> <a${addAttribute(`/blog/${slug}`, "href")} data-astro-cid-iyiqi2so> <img${addAttribute(image.startsWith("/") ? image : `/${image}`, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" width="400" height="192" data-astro-cid-iyiqi2so> </a> </div>`} <div class="p-6" data-astro-cid-iyiqi2so> <div class="mb-4" data-astro-cid-iyiqi2so> <span class="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full" data-astro-cid-iyiqi2so> ${category || "Crypto"} </span> ${subcategory && renderTemplate`<span class="inline-block ml-2 px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full" data-astro-cid-iyiqi2so> ${subcategory} </span>`} </div> <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white" data-astro-cid-iyiqi2so> <a${addAttribute(`/blog/${slug}`, "href")} class="hover:text-primary transition-colors" data-astro-cid-iyiqi2so> ${title} </a> </h3> ${description && renderTemplate`<p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm" data-astro-cid-iyiqi2so> ${description} </p>`} <div class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400" data-astro-cid-iyiqi2so> <span data-astro-cid-iyiqi2so>${formattedDate}</span> <a${addAttribute(`/blog/${slug}`, "href")} class="text-primary font-medium hover:underline" data-astro-cid-iyiqi2so>
Read →
</a> </div> </div> </article> `;
}, "C:/Users/NefuTrades/autoinsureguides/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };

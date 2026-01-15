import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  function getSmartPageList(currentPage2, totalPages2, maxVisible = 5) {
    if (totalPages2 <= maxVisible + 2) {
      return Array.from({ length: totalPages2 }, (_, i) => i + 1);
    }
    let pages = [];
    pages.push(1);
    let start = Math.max(2, currentPage2 - Math.floor((maxVisible - 2) / 2));
    let end = Math.min(totalPages2 - 1, start + (maxVisible - 3));
    if (end >= totalPages2 - 1) {
      start = Math.max(2, totalPages2 - (maxVisible - 2));
    }
    if (start > 2) {
      pages.push("left-ellipsis");
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages2 - 1) {
      pages.push("right-ellipsis");
    }
    pages.push(totalPages2);
    return pages;
  }
  const smartPages = getSmartPageList(currentPage, totalPages, 5);
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mb-4 flex justify-center space-x-2 text-center" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200" aria-label="Go to previous page"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center pointer-events-none"><span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}${smartPages.map((page) => {
    if (page === "left-ellipsis" || page === "right-ellipsis") {
      return renderTemplate`<span class="border border-transparent rounded-md h-10 w-10 leading-[35px] font-semibold text-dark flex items-center justify-center" aria-hidden="true">
...
</span>`;
    }
    const isCurrent = page === currentPage;
    const isFirstPage = page === 1;
    return isCurrent ? renderTemplate`<span aria-current="page" class="border border-primary bg-primary rounded-md h-10 w-10 leading-[35px] font-semibold text-white flex items-center justify-center">${page}</span>` : renderTemplate`<a${addAttribute(
      isFirstPage ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${page}`,
      "href"
    )} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200"${addAttribute(`Go to page ${page}`, "aria-label")}>${page}</a>`;
  })}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="border border-primary hover:bg-primary hover:text-white rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center transition duration-200" aria-label="Go to next page"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="border border-gray-400 opacity-40 rounded-md h-10 w-10 leading-[36px] font-semibold text-dark flex items-center justify-center pointer-events-none"><span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/layouts/components/Pagination.astro", void 0);

export { $$Pagination as $ };

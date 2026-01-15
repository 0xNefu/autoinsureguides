/* empty css                                  */
import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import 'clsx';
import { g as getSinglePage, h as humanize, s as slugify } from './contentParser_l4ZH9VmO.mjs';
import { d as dateFormat } from './dateFormat_Ch5UtllK.mjs';
import { r as renderEntry, g as getCollection } from './_astro_content_DNkqUFJX.mjs';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { title = "Check this out", url = Astro2.url } = Astro2.props;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  return renderTemplate`${maybeRenderHead()}<div class="my-20 py-12 border-t-2 border-gray-200 dark:border-gray-700"> <div class="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto"> <a${addAttribute(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-7 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.83c-.435.717-1.39 2.23-2.826 2.23-.331 0-.665-.045-.985-.127v.001c.26.5.53 1.04.82 1.6.29.56.6 1.12.94 1.67l-7.33 1.33c-.45 0-.9-.04-1.34-.12l.01.01c-2.42-.24-4.7-1.47-6.42-3.44 1.07.11 2.14.06 3.19-.14 1.24-.24 2.39-.73 3.42-1.43-1.14-.1-2.23-.6-3.03-1.47-.8-.87-1.24-1.98-1.24-3.13 0-.06.01-.11.01-.17.42.23.88.36 1.35.4.98.08 1.95-.17 2.84-.7-.97-.23-1.87-.77-2.53-1.55-.66-.78-1-1.78-1-2.83 0-.66.17-1.3.48-1.87 2.08 2.55 5.15 4.22 8.57 4.42-.08-.01-.16-.02-.24-.03.08-.78.41-1.5 1-2.05.59-.55 1.35-.86 2.14-.9.79-.04 1.58.17 2.27.6.71.43 1.29.99 1.69 1.64.79-.15 1.55-.46 2.25-.94-.26.78-.77 1.45-1.46 1.94.67-.08 1.32-.26 1.93-.53-.44.66-.99 1.23-1.64 1.67z"></path></svg>
Share on X
</a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-7 py-4 bg-[#0a66c2] text-white font-semibold rounded-2xl hover:bg-[#0855a3] transition">
LinkedIn
</a> <a${addAttribute(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-7 py-4 bg-[#25d366] text-white font-semibold rounded-2xl hover:bg-[#128c7e] transition">
WhatsApp
</a> <a${addAttribute(`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-7 py-4 bg-[#0088cc] text-white font-semibold rounded-2xl hover:bg-[#006699] transition">
Telegram
</a> </div> </div>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/components/SocialShare.astro", void 0);

const $$Astro$2 = createAstro();
const $$SimilarPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SimilarPosts;
  const { posts = [] } = Astro2.props;
  const similarPosts = posts;
  return renderTemplate`<!-- src/components/SimilarPosts.astro - SIMPLE WORKING VERSION -->${similarPosts.length > 0 && renderTemplate`${maybeRenderHead()}<div class="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"><h3 class="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
Similar Posts
</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6">${similarPosts.map((post) => {
    const { title, description, date } = post.data;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
    return renderTemplate`<article class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"><div class="mb-3"><span class="text-xs text-gray-500 dark:text-gray-400">${formattedDate}</span></div><h4 class="font-bold mb-2 text-gray-900 dark:text-white"><a${addAttribute(`/blog/${post.id}`, "href")} class="hover:text-primary transition-colors">${title}</a></h4>${description && renderTemplate`<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">${description}</p>`}</article>`;
  })}</div></div>`}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/components/SimilarPosts.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  await getSinglePage("authors");
  const posts = await getSinglePage("posts");
  const { post } = Astro2.props;
  const similarPosts = posts.filter((p) => p.slug !== post.slug && p.data.category === post.data.category).slice(0, 3);
  const { Content } = await renderEntry(post);
  const { title, description, authors, category, image, date, tags, insuranceCompany, state, savingsAmount, coverageType } = post.data;
  const siteUrl = "https://autoinsureguides.com";
  `${siteUrl}${Astro2.url.pathname}`;
  const getAuthorNames = () => {
    if (!authors || !Array.isArray(authors)) return "AutoInsureGuides Team";
    const names = authors.map((a) => a?.data?.name).filter((name) => name && typeof name === "string");
    return names.length > 0 ? names.join(", ") : "AutoInsureGuides Team";
  };
  const authorNames = getAuthorNames();
  function calculateReadTime(content, wordsPerMinute = 200) {
    if (!content) return 5;
    const plainText = content.replace(/<[^>]*>/g, "");
    const wordCount = plainText.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  }
  const readTime = calculateReadTime(post.body) || 8;
  return renderTemplate(_a || (_a = __template([`<!-- Structured Data for Insurance Article --><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "description": "{description}",
  "image": "{ogImage}",
  "datePublished": "{date}",
  "dateModified": "{date}",
  "author": {
    "@type": "Organization",
    "name": "AutoInsureGuides",
    "url": "https://autoinsureguides.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AutoInsureGuides",
    "logo": {
      "@type": "ImageObject",
      "url": "https://autoinsureguides.com/images/logo.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{canonicalUrl}"
  },
  {insuranceCompany ? \`"about": "\${insuranceCompany}",\` : ''}
  {state ? \`"spatialCoverage": "\${state}",\` : ''}
  "keywords": "{tags ? tags.join(', ') : 'auto insurance'}",
  "articleSection": "{category ? category.replace('-', ' ') : 'Insurance'}",
  "timeRequired": "PT{readTime}M",
  "isAccessibleForFree": "true"
}
<\/script> `, '<section class="pt-8 pb-16 bg-gradient-to-b from-blue-50 to-white" data-astro-cid-swrgprbq> <div class="container mx-auto px-4 max-w-4xl" data-astro-cid-swrgprbq> <!-- Article Header --> <div class="text-center mb-12" data-astro-cid-swrgprbq>  ', '  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-astro-cid-swrgprbq> ', ' </h1>  <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-600 text-sm md:text-base" data-astro-cid-swrgprbq>  <div class="flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span class="font-medium text-gray-900" data-astro-cid-swrgprbq>', '</span> </div>  <div class="flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <time', " data-astro-cid-swrgprbq>", '</time> </div>  <div class="flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span data-astro-cid-swrgprbq>', ' min read</span> </div> </div>  <div class="flex flex-wrap justify-center gap-4 mt-6" data-astro-cid-swrgprbq> ', " ", " ", " </div> </div>  ", '  <article class="prose prose-lg max-w-none mb-16" data-astro-cid-swrgprbq> <div class="content" data-astro-cid-swrgprbq> ', " </div> </article>  ", '  <div class="my-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200" data-astro-cid-swrgprbq> <div class="text-center" data-astro-cid-swrgprbq> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-swrgprbq>Need Help With Your Insurance?</h3> <p class="text-gray-700 mb-6 max-w-2xl mx-auto" data-astro-cid-swrgprbq>\nUse our free tools to compare quotes, calculate savings, and find the best coverage for your needs.\n</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-swrgprbq> <a href="/tools/calculator" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:shadow-lg transition-all" data-astro-cid-swrgprbq>\n\u{1F9EE} Use Savings Calculator\n</a> <a href="/get-quotes" class="px-6 py-3 bg-white border-2 border-blue-600 text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all" data-astro-cid-swrgprbq>\n\u{1F697} Get Free Quotes\n</a> </div> </div> </div>  <div class="mb-16 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <h3 class="text-lg font-bold text-gray-900 mb-6 text-center" data-astro-cid-swrgprbq>Share This Guide</h3> ', ' </div>  <div class="my-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200" data-astro-cid-swrgprbq> <div class="text-center max-w-2xl mx-auto" data-astro-cid-swrgprbq> <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6" data-astro-cid-swrgprbq> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-swrgprbq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-swrgprbq></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-swrgprbq>Get Insurance Tips & Savings Alerts</h3> <p class="text-gray-600 mb-8" data-astro-cid-swrgprbq>\nJoin 15,000+ readers getting weekly insurance insights, rate change alerts, and money-saving tips.\n</p> <!-- Simple Email Form --> <form class="space-y-4 max-w-md mx-auto" action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscribe" method="post" data-astro-cid-swrgprbq> <div class="flex gap-3" data-astro-cid-swrgprbq> <input type="email" name="email_address" placeholder="Your email address" required class="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-swrgprbq> <button type="submit" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:shadow-lg transition-all" data-astro-cid-swrgprbq>\nSubscribe\n</button> </div> <p class="text-xs text-gray-500" data-astro-cid-swrgprbq>\nNo spam. Unsubscribe anytime. <a href="/privacy" class="text-blue-600 hover:underline" data-astro-cid-swrgprbq>Privacy Policy</a> </p> </form> </div> </div>  ', '  <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6" data-astro-cid-swrgprbq> <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg>\nImportant Insurance Disclaimer\n</h4> <p class="text-sm text-gray-700" data-astro-cid-swrgprbq>\nAutoInsureGuides provides educational content only. We are not licensed insurance agents, brokers, or advisors. \n          Insurance requirements, rates, and coverage options vary by state and individual circumstances. \n          Always consult with licensed insurance professionals for personalized advice.\n<a href="/disclaimer" class="text-blue-600 hover:underline font-medium ml-1" data-astro-cid-swrgprbq>Read full disclaimer</a>.\n</p> </div> </div>  <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <div class="text-center text-gray-500 text-sm mb-4" data-astro-cid-swrgprbq>Advertisement</div> <!-- AdSense in-article ad --> <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-astro-cid-swrgprbq></ins>  </div> </div> </section> '], [`<!-- Structured Data for Insurance Article --><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "description": "{description}",
  "image": "{ogImage}",
  "datePublished": "{date}",
  "dateModified": "{date}",
  "author": {
    "@type": "Organization",
    "name": "AutoInsureGuides",
    "url": "https://autoinsureguides.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AutoInsureGuides",
    "logo": {
      "@type": "ImageObject",
      "url": "https://autoinsureguides.com/images/logo.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{canonicalUrl}"
  },
  {insuranceCompany ? \\\`"about": "\\\${insuranceCompany}",\\\` : ''}
  {state ? \\\`"spatialCoverage": "\\\${state}",\\\` : ''}
  "keywords": "{tags ? tags.join(', ') : 'auto insurance'}",
  "articleSection": "{category ? category.replace('-', ' ') : 'Insurance'}",
  "timeRequired": "PT{readTime}M",
  "isAccessibleForFree": "true"
}
<\/script> `, '<section class="pt-8 pb-16 bg-gradient-to-b from-blue-50 to-white" data-astro-cid-swrgprbq> <div class="container mx-auto px-4 max-w-4xl" data-astro-cid-swrgprbq> <!-- Article Header --> <div class="text-center mb-12" data-astro-cid-swrgprbq>  ', '  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-astro-cid-swrgprbq> ', ' </h1>  <div class="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-600 text-sm md:text-base" data-astro-cid-swrgprbq>  <div class="flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span class="font-medium text-gray-900" data-astro-cid-swrgprbq>', '</span> </div>  <div class="flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <time', " data-astro-cid-swrgprbq>", '</time> </div>  <div class="flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span data-astro-cid-swrgprbq>', ' min read</span> </div> </div>  <div class="flex flex-wrap justify-center gap-4 mt-6" data-astro-cid-swrgprbq> ', " ", " ", " </div> </div>  ", '  <article class="prose prose-lg max-w-none mb-16" data-astro-cid-swrgprbq> <div class="content" data-astro-cid-swrgprbq> ', " </div> </article>  ", '  <div class="my-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200" data-astro-cid-swrgprbq> <div class="text-center" data-astro-cid-swrgprbq> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-swrgprbq>Need Help With Your Insurance?</h3> <p class="text-gray-700 mb-6 max-w-2xl mx-auto" data-astro-cid-swrgprbq>\nUse our free tools to compare quotes, calculate savings, and find the best coverage for your needs.\n</p> <div class="flex flex-wrap justify-center gap-4" data-astro-cid-swrgprbq> <a href="/tools/calculator" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:shadow-lg transition-all" data-astro-cid-swrgprbq>\n\u{1F9EE} Use Savings Calculator\n</a> <a href="/get-quotes" class="px-6 py-3 bg-white border-2 border-blue-600 text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all" data-astro-cid-swrgprbq>\n\u{1F697} Get Free Quotes\n</a> </div> </div> </div>  <div class="mb-16 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <h3 class="text-lg font-bold text-gray-900 mb-6 text-center" data-astro-cid-swrgprbq>Share This Guide</h3> ', ' </div>  <div class="my-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200" data-astro-cid-swrgprbq> <div class="text-center max-w-2xl mx-auto" data-astro-cid-swrgprbq> <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6" data-astro-cid-swrgprbq> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-swrgprbq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-swrgprbq></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-swrgprbq>Get Insurance Tips & Savings Alerts</h3> <p class="text-gray-600 mb-8" data-astro-cid-swrgprbq>\nJoin 15,000+ readers getting weekly insurance insights, rate change alerts, and money-saving tips.\n</p> <!-- Simple Email Form --> <form class="space-y-4 max-w-md mx-auto" action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscribe" method="post" data-astro-cid-swrgprbq> <div class="flex gap-3" data-astro-cid-swrgprbq> <input type="email" name="email_address" placeholder="Your email address" required class="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-swrgprbq> <button type="submit" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl hover:shadow-lg transition-all" data-astro-cid-swrgprbq>\nSubscribe\n</button> </div> <p class="text-xs text-gray-500" data-astro-cid-swrgprbq>\nNo spam. Unsubscribe anytime. <a href="/privacy" class="text-blue-600 hover:underline" data-astro-cid-swrgprbq>Privacy Policy</a> </p> </form> </div> </div>  ', '  <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6" data-astro-cid-swrgprbq> <h4 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2" data-astro-cid-swrgprbq> <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg>\nImportant Insurance Disclaimer\n</h4> <p class="text-sm text-gray-700" data-astro-cid-swrgprbq>\nAutoInsureGuides provides educational content only. We are not licensed insurance agents, brokers, or advisors. \n          Insurance requirements, rates, and coverage options vary by state and individual circumstances. \n          Always consult with licensed insurance professionals for personalized advice.\n<a href="/disclaimer" class="text-blue-600 hover:underline font-medium ml-1" data-astro-cid-swrgprbq>Read full disclaimer</a>.\n</p> </div> </div>  <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <div class="text-center text-gray-500 text-sm mb-4" data-astro-cid-swrgprbq>Advertisement</div> <!-- AdSense in-article ad --> <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-astro-cid-swrgprbq></ins>  </div> </div> </section> '])), maybeRenderHead(), category && renderTemplate`<div class="inline-block mb-6" data-astro-cid-swrgprbq> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="px-5 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-sm hover:bg-blue-200 transition-colors" data-astro-cid-swrgprbq> ${category ? category.replace("-", " ").toUpperCase() : "INSURANCE GUIDE"} </a> </div>`, title, authorNames, addAttribute(date, "datetime"), dateFormat(date), readTime, state && renderTemplate`<div class="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full" data-astro-cid-swrgprbq> <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span class="text-sm font-medium text-gray-700" data-astro-cid-swrgprbq>${state}</span> </div>`, insuranceCompany && renderTemplate`<div class="inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full" data-astro-cid-swrgprbq> <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span class="text-sm font-medium text-gray-700" data-astro-cid-swrgprbq>${insuranceCompany}</span> </div>`, savingsAmount && renderTemplate`<div class="inline-flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full" data-astro-cid-swrgprbq> <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-swrgprbq> <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" data-astro-cid-swrgprbq></path> </svg> <span class="text-sm font-bold text-green-700" data-astro-cid-swrgprbq>Save ${savingsAmount}</span> </div>`, image && renderTemplate`<div class="mb-12 rounded-2xl overflow-hidden shadow-xl" data-astro-cid-swrgprbq> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-auto object-cover" loading="eager" data-astro-cid-swrgprbq> ${post.data.heroImageAlt && renderTemplate`<p class="text-center text-sm text-gray-500 mt-2 px-4" data-astro-cid-swrgprbq>${post.data.heroImageAlt}</p>`} </div>`, renderComponent($$result, "Content", Content, { "data-astro-cid-swrgprbq": true }), tags && tags.length > 0 && renderTemplate`<div class="mb-16 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <h3 class="text-lg font-bold text-gray-900 mb-4" data-astro-cid-swrgprbq>Topics:</h3> <div class="flex flex-wrap gap-3" data-astro-cid-swrgprbq> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${slugify(tag)}`, "href")} class="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors text-sm" data-astro-cid-swrgprbq>
#${humanize(tag)} </a>`)} </div> </div>`, renderComponent($$result, "SocialShare", $$SocialShare, { "title": title, "url": Astro2.url, "data-astro-cid-swrgprbq": true }), similarPosts.length > 0 && renderTemplate`<div class="mt-16 pt-8 border-t border-gray-200" data-astro-cid-swrgprbq> <h3 class="text-2xl font-bold text-gray-900 mb-8" data-astro-cid-swrgprbq>Related Insurance Guides</h3> ${renderComponent($$result, "SimilarPosts", $$SimilarPosts, { "posts": similarPosts, "data-astro-cid-swrgprbq": true })} </div>`);
}, "C:/Users/NefuTrades/autoinsureguides/src/partials/PostSingle.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const rawSlug = Astro2.params.slug || "";
  const cleanSlug = rawSlug.endsWith(".md") ? rawSlug.slice(0, -3) : rawSlug;
  const allPosts = await getCollection("posts", ({ data }) => !data.draft);
  let post = allPosts.find((p) => p.slug === cleanSlug);
  if (!post) {
    post = allPosts.find((p) => p.slug === rawSlug);
  }
  if (!post) {
    if (rawSlug.endsWith(".md")) {
      const redirectSlug = rawSlug.slice(0, -3);
      throw Astro2.redirect(`/blog/${redirectSlug}`, 301);
    }
    throw Astro2.redirect("/404");
  }
  const {
    title,
    meta_title,
    image,
    description,
    hasGatedContent,
    isFullyGated,
    noindex,
    canonical
  } = post.data;
  const escapeHtml = (text) => {
    if (!text) return "";
    return text.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").trim();
  };
  const postImage = image || `/images/posts/default-og.jpg`;
  const escapedDescription = escapeHtml(description);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "image": String(postImage), "description": escapedDescription, "hasGatedContent": hasGatedContent, "isFullyGated": isFullyGated, "noindex": noindex, "canonical": canonical }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": post })} ` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_9 as _ };

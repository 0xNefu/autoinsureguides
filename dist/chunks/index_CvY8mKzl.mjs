/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';
import { $ as $$Base } from './Base_CKfait4E.mjs';
import { C as CATEGORY_HIERARCHY } from './categories_BfLSlxoM.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  function calculateReadTime(content, wordsPerMinute = 130) {
    if (!content) return 10;
    const plainText = content.replace(/---[\s\S]*?---/, "").replace(/```[\s\S]*?```/g, "").replace(/<[^>]*>/g, "").replace(/#{1,6}\s*/g, "").replace(/[\[\]\(\)]/g, " ").replace(/\s+/g, " ").trim();
    const wordCount = plainText.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return Math.max(1, Math.min(minutes, 60));
  }
  function getPostReadTime(post) {
    if (post.data.readTime) return post.data.readTime;
    if (post.body) return calculateReadTime(post.body);
    const estimates = {
      "getting-started": 8,
      "security-privacy": 10,
      "trading-investing": 12,
      "defi-yield": 15,
      "airdrop-farming": 12,
      "infrastructure-tech": 14,
      "tools-automation": 13,
      "research-analysis": 15,
      "regulatory-tax": 12,
      "portfolio-management": 12,
      "prediction-markets": 14
    };
    return estimates[post.data.category] || 10;
  }
  const allPostsRaw = await getCollection("posts", ({ data }) => !data.draft);
  const allPosts = allPostsRaw.map((post) => ({
    ...post,
    data: {
      ...post.data,
      readTime: getPostReadTime(post)
    }
  }));
  const categoryPostCounts = {};
  const latestCategoryPosts = {};
  Object.keys(CATEGORY_HIERARCHY).forEach((category) => {
    const postsInCategory = allPosts.filter((p) => p.data.category === category);
    categoryPostCounts[category] = postsInCategory.length;
    latestCategoryPosts[category] = postsInCategory.sort((a, b) => new Date(b.data.date) - new Date(a.data.date)).slice(0, 2);
  });
  const totalPosts = allPosts.length;
  const totalCategories = Object.keys(CATEGORY_HIERARCHY).length;
  const featuredCategories = Object.keys(CATEGORY_HIERARCHY).map((category) => ({
    slug: category,
    ...CATEGORY_HIERARCHY[category],
    postCount: categoryPostCounts[category] || 0,
    latestPosts: latestCategoryPosts[category] || []
  })).sort((a, b) => b.postCount - a.postCount).slice(0, 4);
  const categoriesWithProgress = Object.entries(CATEGORY_HIERARCHY).map(([slug, category]) => {
    const postCount = categoryPostCounts[slug] || 0;
    const latestPosts = latestCategoryPosts[slug] || [];
    const isGettingStarted = slug === "getting-started";
    const isExclusive = slug === "web3-gaming-metaverse" || slug === "alpha-insider-strategies";
    const isAlphaCategory = slug === "alpha-insider-strategies";
    const isGamingCategory = slug === "web3-gaming-metaverse";
    let categoryStatus = "New path";
    if (postCount > 0 && postCount <= 3) categoryStatus = "Getting started";
    else if (postCount > 3 && postCount <= 7) categoryStatus = "Growing";
    else if (postCount > 7) categoryStatus = "Comprehensive";
    const progressWidth = Math.min(100, postCount / 10 * 100);
    return {
      slug,
      ...category,
      postCount,
      latestPosts,
      isGettingStarted,
      isExclusive,
      isAlphaCategory,
      isGamingCategory,
      categoryStatus,
      progressWidth
    };
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Master DeFi Through Our 11 Pillar Categories | autoinsureguides Capital", "description": "Explore our comprehensive DeFi learning paths across 11 essential categories. From beginner guides to advanced strategies, all content is completely free." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[70vh] overflow-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-blue-950 bg-gradient-to-br from-blue-50 via-white to-cyan-50"> <div class="absolute inset-0"> <div class="absolute w-[500px] h-[500px] dark:bg-cyan-500/10 bg-cyan-200/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div> <div class="absolute w-[400px] h-[400px] dark:bg-purple-500/10 bg-purple-200/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse animation-delay-2000"></div> </div> <div class="container relative z-10 mx-auto px-4 pt-24 pb-16"> <div class="max-w-6xl mx-auto text-center"> <div class="inline-flex items-center gap-2 dark:bg-black/40 bg-white/80 backdrop-blur-sm dark:border border-cyan-500/30 border-cyan-400/30 rounded-full px-5 py-2.5 mb-8"> <span class="text-cyan-500 dark:text-cyan-400">🗺️</span> <span class="text-cyan-600 dark:text-cyan-300 font-medium text-sm"> ${totalCategories} LEARNING PATHS • ${totalPosts} GUIDES • 100% FREE
</span> </div> <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 leading-tight"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">
Master DeFi
</span> <br> <span class="dark:text-white text-gray-900 text-3xl md:text-5xl lg:text-6xl">
Through Our 11 Pillars
</span> </h1> <p class="text-xl md:text-2xl dark:text-gray-300 text-gray-700 mb-10 max-w-3xl mx-auto">
Structured learning paths from absolute beginner to advanced strategist.
<span class="text-cyan-600 dark:text-cyan-400 font-semibold"> Everything you need, organized.</span> </p> <div class="dark:bg-black/30 bg-white/50 backdrop-blur-sm rounded-2xl dark:border border-gray-800 border-gray-200 p-6 max-w-4xl mx-auto mb-12"> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> <div class="text-center"> <div class="text-3xl font-bold dark:text-white text-gray-900 mb-2">${totalCategories}</div> <div class="dark:text-gray-400 text-gray-600 text-sm">PILLAR CATEGORIES</div> </div> <div class="text-center"> <div class="text-3xl font-bold dark:text-white text-gray-900 mb-2">${totalPosts}</div> <div class="dark:text-gray-400 text-gray-600 text-sm">FREE GUIDES</div> </div> <div class="text-center"> <div class="text-3xl font-bold dark:text-white text-gray-900 mb-2">100%</div> <div class="text-green-500 dark:text-green-400 text-sm">COMPLETELY FREE</div> </div> <div class="text-center"> <div class="text-3xl font-bold dark:text-white text-gray-900 mb-2">2</div> <div class="text-purple-500 dark:text-purple-400 text-sm">EXCLUSIVE PILLARS</div> </div> </div> </div> <div class="flex flex-wrap gap-3 justify-center"> <a href="#all-pillars" class="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
🗺️ Explore All Pillars
</a> <a href="#featured-paths" class="px-5 py-3 dark:bg-black/50 bg-white/50 backdrop-blur-sm border-2 border-purple-500/30 dark:text-white text-gray-900 font-bold rounded-xl hover:bg-purple-500/10 transition-all">
⭐ Featured Paths
</a> <a href="#getting-started" class="px-5 py-3 dark:bg-black/50 bg-white/50 backdrop-blur-sm border-2 border-green-500/30 dark:text-white text-gray-900 font-bold rounded-xl hover:bg-green-500/10 transition-all">
🚀 Start Here
</a> </div> </div> </div> </section>  <section id="featured-paths" class="py-20 dark:bg-black bg-white"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-6"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
Most Popular Paths
</span> </h2> <p class="text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
Start with these comprehensive categories that readers love most
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"> ${featuredCategories.map((category) => renderTemplate`<div${addAttribute(`group ${category.isExclusive ? category.isAlphaCategory ? "dark:border border-yellow-500/30 border-yellow-400/30" : "dark:border border-purple-500/30 border-purple-400/30" : "dark:border border-gray-800 border-gray-200"} dark:bg-gradient-to-br dark:from-gray-900 dark:to-black bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2`, "class")}> <div class="flex items-start justify-between mb-6"> <div class="text-3xl">${category.icon}</div> <div class="flex items-center gap-2"> ${category.isExclusive && renderTemplate`<span${addAttribute(`px-2 py-1 ${category.isAlphaCategory ? "bg-gradient-to-r from-yellow-600 to-orange-600" : "bg-gradient-to-r from-purple-600 to-pink-600"} text-white text-xs font-bold rounded-full`, "class")}>
EXCLUSIVE
</span>`} <div${addAttribute(`px-3 py-1 ${category.isExclusive ? category.isAlphaCategory ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-300" : "bg-purple-500/20 text-purple-600 dark:text-purple-300" : "bg-cyan-500/20 text-cyan-600 dark:text-cyan-300"} rounded-full text-xs font-bold`, "class")}> ${category.postCount} ${category.postCount === 1 ? "guide" : "guides"} </div> </div> </div> <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors"> ${category.name} </h3> <p class="dark:text-gray-400 text-gray-600 text-sm mb-6"> ${category.description} </p> <div class="space-y-3 mb-6"> ${category.latestPosts.length > 0 ? category.latestPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block p-3 dark:bg-black/30 bg-gray-100/50 rounded-lg hover:dark:bg-black/50 hover:bg-gray-200/50 transition-colors group"> <div class="dark:text-white text-gray-900 text-sm group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-1"> ${post.data.title} </div> <div class="dark:text-gray-500 text-gray-400 text-xs mt-1 flex justify-between"> <span>${post.data.readTime} min</span> <span>${new Date(post.data.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span> </div> </a>`) : renderTemplate`<div class="dark:text-gray-600 text-gray-400 text-sm italic p-3 dark:bg-black/20 bg-gray-100/30 rounded-lg text-center">
Coming soon...
</div>`} </div> <a${addAttribute(`/categories/${category.slug}`, "href")} class="inline-flex items-center gap-2 text-sm font-medium dark:text-white text-gray-900 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
Explore full path →
</a> </div>`)} </div> </div> </section>  <section id="all-pillars" class="py-20 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black bg-gradient-to-b from-gray-100 to-white"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-6"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400">
Explore All 11 Learning Pillars
</span> </h2> <p class="text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
Comprehensive coverage from fundamentals to advanced strategies
</p> </div> <!-- Special Star Pillar: Getting Started --> ${categoriesWithProgress.filter((cat) => cat.isGettingStarted).map((category) => renderTemplate`<div class="mb-16 max-w-7xl mx-auto"> <div class="relative dark:bg-gradient-to-br dark:from-emerald-900/20 dark:to-green-900/20 bg-gradient-to-br from-emerald-50/80 to-green-50/80 dark:border-2 border-emerald-500/40 border-emerald-400/40 rounded-3xl p-8 shadow-2xl"> <!-- Star Badge --> <div class="absolute -top-4 left-6 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg"> <span>⭐</span> RECOMMENDED STARTING POINT
</div> <div class="flex flex-col lg:flex-row lg:items-start gap-8"> <div class="lg:w-2/3"> <div class="flex items-center gap-4 mb-6"> <div class="text-5xl">${category.icon}</div> <div> <h3 class="text-2xl lg:text-3xl font-bold dark:text-white text-gray-900 mb-2"> ${category.name} </h3> <div class="flex items-center gap-4"> <span class="dark:text-emerald-300 text-emerald-600 text-sm font-medium"> ${category.postCount} ${category.postCount === 1 ? "guide" : "guides"} available
</span> <span class="px-3 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 rounded-full text-xs font-bold">
Beginner-friendly 🎯
</span> </div> </div> </div> <p class="dark:text-gray-300 text-gray-700 text-lg mb-8 max-w-3xl"> ${category.description} </p> <!-- Progress --> <div class="mb-8 max-w-2xl"> <div class="flex items-center justify-between mb-2"> <span class="dark:text-gray-300 text-gray-700 font-medium">Learning path progress</span> <span class="dark:text-emerald-300 text-emerald-600 font-bold">${category.categoryStatus}</span> </div> <div class="dark:bg-gray-800 bg-gray-200 rounded-full h-3"> <div class="dark:bg-gradient-to-r dark:from-emerald-400 dark:to-green-400 bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-500"${addAttribute({ "width": `${category.progressWidth}%` }, "style")}></div> </div> </div> <a${addAttribute(`/categories/${category.slug}`, "href")} class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:scale-[1.02] text-lg"> <span>🚀</span> Start Your DeFi Journey Here
</a> </div> <div class="lg:w-1/3"> <h4 class="text-lg font-bold dark:text-white text-gray-900 mb-4">Beginner Guides:</h4> ${category.latestPosts.length > 0 ? renderTemplate`<div class="space-y-3"> ${category.latestPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block p-4 dark:bg-emerald-900/30 bg-emerald-100/50 rounded-xl hover:dark:bg-emerald-900/50 hover:bg-emerald-200/50 transition-colors group border dark:border-emerald-500/20 border-emerald-400/20"> <div class="flex justify-between items-start mb-2"> <div class="dark:text-white text-gray-900 font-medium group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2"> ${post.data.title} </div> <span class="dark:text-emerald-300 text-emerald-500 text-xs whitespace-nowrap ml-2"> ${post.data.readTime} min
</span> </div> <div class="dark:text-emerald-300/80 text-emerald-600/80 text-xs"> ${new Date(post.data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </div> </a>`)} </div>` : renderTemplate`<div class="p-4 dark:bg-emerald-900/20 bg-emerald-100/30 rounded-xl text-center border dark:border-emerald-500/10 border-emerald-400/10"> <div class="text-3xl mb-2 dark:text-emerald-700 text-emerald-300">📖</div> <p class="dark:text-emerald-300/80 text-emerald-600/80 text-sm">First guides coming soon!</p> </div>`} </div> </div> </div> </div>`)} <!-- All Other Pillars (Grid Layout) --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"> ${categoriesWithProgress.filter((cat) => !cat.isGettingStarted).map((category) => renderTemplate`<div${addAttribute(`group relative ${category.isExclusive ? category.isAlphaCategory ? "dark:bg-gradient-to-br dark:from-yellow-900/20 dark:to-orange-900/20 bg-gradient-to-br from-yellow-50/80 to-orange-50/80 dark:border-2 border-yellow-500/40 border-yellow-400/40" : "dark:bg-gradient-to-br dark:from-purple-900/20 dark:to-pink-900/20 bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:border-2 border-purple-500/40 border-purple-400/40" : "dark:bg-gradient-to-br dark:from-gray-900/80 dark:to-black/80 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm dark:border border-gray-800 border-gray-200 hover:border-cyan-500/30"} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${category.isExclusive ? "shadow-xl" : ""}`, "class")}> ${category.isExclusive && category.isAlphaCategory && renderTemplate`<!-- Special Badge for Alpha - Top Left -->
        <div class="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-xs rounded-full flex items-center gap-2 shadow-lg z-10"> <span>⚡</span> NEWSLETTER EXCLUSIVE
</div>`} ${category.isExclusive && category.isGamingCategory && renderTemplate`<div class="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs rounded-full shadow-lg z-10">
NEWSLETTER EXCLUSIVE
</div>`} <div class="flex flex-col h-full"> <!-- Top Section with Icon, Title, and Stats --> <div class="mb-6"> <div class="flex items-start justify-between mb-4"> <div class="flex items-center gap-4"> <div${addAttribute(`text-4xl ${category.isExclusive && category.isAlphaCategory ? "animate-pulse" : ""}`, "class")}>${category.icon}</div> <div> <h3 class="text-xl lg:text-2xl font-bold dark:text-white text-gray-900 mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors"> ${category.name} </h3> <div class="flex items-center gap-3"> <span${addAttribute(`${category.isExclusive ? category.isAlphaCategory ? "dark:text-yellow-300 text-yellow-600" : "dark:text-purple-300 text-purple-600" : "dark:text-gray-500 text-gray-400"} text-sm`, "class")}> ${category.postCount} ${category.postCount === 1 ? "guide" : "guides"} </span> ${category.isExclusive ? renderTemplate`<span${addAttribute(`px-2 py-0.5 ${category.isAlphaCategory ? "bg-yellow-500/30 text-yellow-700 dark:text-yellow-300" : "bg-purple-500/30 text-purple-700 dark:text-purple-300"} rounded-full text-xs font-bold`, "class")}> ${category.isAlphaCategory ? "\u26A1 Early Access" : "\u{1F3AE} Early Access"} </span>` : renderTemplate`<span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 rounded-full text-xs font-bold"> ${category.categoryStatus} </span>`} </div> </div> </div> </div> <p${addAttribute(`${category.isExclusive ? category.isAlphaCategory ? "dark:text-yellow-100/90 text-yellow-900/90" : "dark:text-purple-100/90 text-purple-900/90" : "dark:text-gray-300 text-gray-700"} mb-6`, "class")}> ${category.description} </p> <!-- Progress Bar --> <div class="flex items-center gap-3 mb-6"> <div class="flex-1 dark:bg-gray-800 bg-gray-200 rounded-full h-2 relative"> <div${addAttribute(`h-2 rounded-full transition-all duration-500 ${category.isExclusive ? category.isAlphaCategory ? "dark:bg-gradient-to-r dark:from-yellow-400 dark:to-orange-400 bg-gradient-to-r from-yellow-500 to-orange-500" : "dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-400 bg-gradient-to-r from-purple-500 to-pink-500" : "dark:bg-cyan-500 bg-cyan-400"}`, "class")}${addAttribute({ "width": `${category.progressWidth}%` }, "style")}></div> ${category.isExclusive && renderTemplate`<div class="absolute inset-0 flex items-center justify-center"> <span${addAttribute(`text-[8px] ${category.isAlphaCategory ? "dark:text-yellow-300 text-yellow-600" : "dark:text-purple-300 text-purple-600"} font-bold`, "class")}>🔒 LOCKED</span> </div>`} </div> <span${addAttribute(`${category.isExclusive ? category.isAlphaCategory ? "dark:text-yellow-300 text-yellow-600" : "dark:text-purple-300 text-purple-600" : "dark:text-gray-400 text-gray-500"} text-sm font-medium`, "class")}> ${category.isExclusive ? "Join for Access" : `${Math.round(category.progressWidth)}% complete`} </span> </div> </div> <!-- Latest Posts Preview --> <div class="mt-auto"> <h4${addAttribute(`text-lg font-bold ${category.isExclusive ? category.isAlphaCategory ? "dark:text-yellow-300 text-yellow-700" : "dark:text-purple-300 text-purple-700" : "dark:text-white text-gray-900"} mb-4`, "class")}> ${category.isExclusive ? "What's Inside (Exclusive):" : "Latest in this pillar:"} </h4> ${category.latestPosts.length > 0 ? renderTemplate`<div class="space-y-3 mb-6"> ${category.latestPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block p-4 dark:bg-black/30 bg-gray-100/50 rounded-xl hover:dark:bg-black/50 hover:bg-gray-200/50 transition-colors group"> <div class="dark:text-white text-gray-900 font-medium group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2"> ${post.data.title} </div> <div class="dark:text-gray-500 text-gray-400 text-xs"> ${new Date(post.data.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </div> </a>`)} </div>` : category.isExclusive ? renderTemplate`<div class="space-y-3 mb-6"> ${category.isAlphaCategory ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="p-3 dark:bg-yellow-900/20 bg-yellow-100/50 rounded-xl border dark:border-yellow-500/20 border-yellow-400/20"> <div class="dark:text-yellow-200 text-yellow-800 text-sm font-medium mb-1">
⚡ High-Frequency Airdrop Tactics
</div> <div class="dark:text-yellow-400/70 text-yellow-600/70 text-xs">
Maximize rewards before others even see them
</div> </div> <div class="p-3 dark:bg-yellow-900/20 bg-yellow-100/50 rounded-xl border dark:border-yellow-500/20 border-yellow-400/20"> <div class="dark:text-yellow-200 text-yellow-800 text-sm font-medium mb-1">
🎯 Memecoin & NFT Whitelist Strategies
</div> <div class="dark:text-yellow-400/70 text-yellow-600/70 text-xs">
Insider whitelist hacks revealed only inside
</div> </div> <div class="p-3 dark:bg-yellow-900/20 bg-yellow-100/50 rounded-xl border dark:border-yellow-500/20 border-yellow-400/20"> <div class="dark:text-yellow-200 text-yellow-800 text-sm font-medium mb-1">
🔥 Early DEX Arbitrage
</div> <div class="dark:text-yellow-400/70 text-yellow-600/70 text-xs">
Step-by-step methods for alpha arbitrage
</div> </div> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div class="p-3 dark:bg-purple-900/20 bg-purple-100/50 rounded-xl border dark:border-purple-500/20 border-purple-400/20"> <div class="dark:text-purple-200 text-purple-800 text-sm font-medium mb-1">
🎮 Play-to-Earn Strategies
</div> <div class="dark:text-purple-400/70 text-purple-600/70 text-xs">
Get the most crypto while you play
</div> </div> <div class="p-3 dark:bg-purple-900/20 bg-purple-100/50 rounded-xl border dark:border-purple-500/20 border-purple-400/20"> <div class="dark:text-purple-200 text-purple-800 text-sm font-medium mb-1">
🏆 NFT Game Assets
</div> <div class="dark:text-purple-400/70 text-purple-600/70 text-xs">
Discover hidden NFT gems before anyone else
</div> </div> <div class="p-3 dark:bg-purple-900/20 bg-purple-100/50 rounded-xl border dark:border-purple-500/20 border-purple-400/20"> <div class="dark:text-purple-200 text-purple-800 text-sm font-medium mb-1">
🌐 Metaverse Land & Real Estate
</div> <div class="dark:text-purple-400/70 text-purple-600/70 text-xs">
Virtual real estate secrets revealed
</div> </div> ` })}`} </div>` : renderTemplate`<div class="p-4 dark:bg-black/20 bg-gray-100/30 rounded-xl text-center mb-6"> <div class="text-3xl mb-2 dark:text-gray-700 text-gray-300">📖</div> <p class="dark:text-gray-500 text-gray-400 text-sm">First guides coming soon!</p> </div>`} <a${addAttribute(category.isExclusive ? "/newsletter" : `/categories/${category.slug}`, "href")}${addAttribute(`block w-full py-3 ${category.isExclusive ? category.isAlphaCategory ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:shadow-xl hover:shadow-yellow-500/30" : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/30" : "dark:bg-gray-800/50 bg-gray-100 dark:text-white text-gray-900 font-semibold hover:dark:bg-gray-700 hover:bg-gray-200"} ${category.isExclusive ? "text-white font-bold hover:scale-[1.02]" : ""} rounded-xl text-center transition-all duration-300 group`, "class")}> ${category.isExclusive ? renderTemplate`<div class="flex items-center justify-center gap-2"> <span>🔓</span> <span>Join Newsletter to Unlock</span> </div>` : renderTemplate`<span class="group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
Explore Full Path →
</span>`} </a> </div> </div>  ${category.isExclusive && renderTemplate`<div${addAttribute(`absolute inset-0 ${category.isAlphaCategory ? "bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5" : "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`, "class")}></div>`} </div>`)} </div> </div></section>` })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/categories/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/categories/index.astro";
const $$url = "/categories";

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_21 as _ };

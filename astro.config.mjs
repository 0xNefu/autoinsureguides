import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";

import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: "https://autoinsureguides.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  
  // FIX ADDED HERE
  build: {
    format: "directory", // Forces clean URLs: /blog/post/ instead of /blog/post.md
  },
  
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],

  markdown: {
    remarkPlugins: [
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
    ],
    shikiConfig: { theme: "one-dark-pro", wrap: true },
    extendDefaultPlugins: true,
  },
  
  // ⭐⭐ NEW: CONFIGURE MULTIPLE COLLECTIONS ⭐⭐
  collections: {
    posts: 'src/content/posts/**/*.md',
    states: 'src/content/states/**/*.md',
    vehicles: 'src/content/vehicles/**/*.md',
    companies: 'src/content/companies/**/*.md'
  }
});
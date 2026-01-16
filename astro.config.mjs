// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // ← This enables React components like BiCalendarEdit

export default defineConfig({
  integrations: [
    tailwind(),
    react(), // Add this line - required for react-icons and any React components
  ],
  // Optional: if you need more config later, add here
  // e.g. vite: { ... }, site: 'https://autoinsureguides.com', etc.
});
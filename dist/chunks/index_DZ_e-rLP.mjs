/* empty css                                  */
import { c as createComponent, f as renderHead, b as addAttribute, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let articles = [];
  try {
    articles = await getCollection("auto-insurance");
  } catch (error) {
    console.log("No auto-insurance articles yet");
  }
  const states = [
    "alabama",
    "alaska",
    "arizona",
    "arkansas",
    "california",
    "colorado",
    "connecticut",
    "delaware",
    "florida",
    "georgia",
    "hawaii",
    "idaho",
    "illinois",
    "indiana",
    "iowa",
    "kansas",
    "kentucky",
    "louisiana",
    "maine",
    "maryland",
    "massachusetts",
    "michigan",
    "minnesota",
    "mississippi",
    "missouri",
    "montana",
    "nebraska",
    "nevada",
    "new-hampshire",
    "new-jersey",
    "new-mexico",
    "new-york",
    "north-carolina",
    "north-dakota",
    "ohio",
    "oklahoma",
    "oregon",
    "pennsylvania",
    "rhode-island",
    "south-carolina",
    "south-dakota",
    "tennessee",
    "texas",
    "utah",
    "vermont",
    "virginia",
    "washington",
    "west-virginia",
    "wisconsin",
    "wyoming",
    "washington-dc"
  ];
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Auto Insurance Guides by State | AutoInsureGuides</title><meta name="description" content="Complete auto insurance guides for all 50 states + Washington DC. Find state-specific requirements, minimum coverage, and cost-saving tips.">${renderHead()}</head> <body> <main style="max-width: 1200px; margin: 0 auto; padding: 2rem;"> <h1>Auto Insurance Guides</h1> <p>Complete state-by-state guides to auto insurance requirements, costs, and savings.</p> <!-- State Grid --> <section style="margin-top: 3rem;"> <h2>Browse by State</h2> <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem;"> ${states.map((state) => renderTemplate`<a${addAttribute(`/blog/auto-insurance/${state}`, "href")} style="display: block; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center; text-decoration: none; color: #1f2937;" onmouseover="this.style.backgroundColor='#f3f4f6'" onmouseout="this.style.backgroundColor='white'"> ${state.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} </a>`)} </div> </section> <!-- Recent Articles --> ${articles.length > 0 && renderTemplate`<section style="margin-top: 3rem;"> <h2>Recent Articles</h2> <ul style="list-style: none; padding: 0;"> ${articles.slice(0, 10).map((article) => renderTemplate`<li style="margin: 0.5rem 0; padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"> <a${addAttribute(`/blog/auto-insurance/${article.data.subcategory}/${article.slug}`, "href")} style="text-decoration: none; color: #3b82f6;"> ${article.data.title} </a> ${article.data.state && renderTemplate`<span style="background: #dbeafe; padding: 0.25rem 0.5rem; border-radius: 0.25rem; margin-left: 0.5rem; font-size: 0.875rem;"> ${article.data.state} </span>`} </li>`)} </ul> </section>`} </main> </body></html>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/auto-insurance/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/auto-insurance/index.astro";
const $$url = "/blog/auto-insurance";

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_13 as _ };

/* empty css                                  */
import { c as createComponent, f as renderHead, b as addAttribute, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let articles = [];
  try {
    articles = await getCollection("leads");
  } catch (error) {
    console.log("No leads articles yet");
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
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Insurance & Attorney Leads by State | AutoInsureGuides</title><meta name="description" content="Find insurance quotes and connect with qualified attorneys in your state. State-specific resources for all 50 states + Washington DC.">${renderHead()}</head> <body> <main style="max-width: 1200px; margin: 0 auto; padding: 2rem;"> <h1>Insurance & Attorney Leads</h1> <p>Connect with insurance providers and qualified attorneys in your state. Get quotes and legal assistance.</p> <section style="margin-top: 3rem;"> <h2>Browse by State</h2> <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem;"> ${states.map((state) => renderTemplate`<a${addAttribute(`/blog/leads/${state}`, "href")} style="display: block; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; text-align: center; text-decoration: none; color: #1f2937;" onmouseover="this.style.backgroundColor='#f3f4f6'" onmouseout="this.style.backgroundColor='white'"> ${state.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} </a>`)} </div> </section> <!-- Call to Action --> <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 1rem; margin-top: 3rem;"> <h2 style="color: white;">Need Immediate Assistance?</h2> <p>Get connected with insurance providers or attorneys in your area.</p> <div style="display: flex; gap: 1rem; margin-top: 1rem;"> <a href="/leads/find-attorney" style="background: white; color: #667eea; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold;">
Find an Attorney
</a> <a href="/leads/insurance-quotes" style="background: transparent; border: 2px solid white; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold;">
Get Insurance Quotes
</a> </div> </section> ${articles.length > 0 && renderTemplate`<section style="margin-top: 3rem;"> <h2>Recent Articles</h2> <ul style="list-style: none; padding: 0;"> ${articles.slice(0, 10).map((article) => renderTemplate`<li style="margin: 0.5rem 0; padding: 0.5rem; border-bottom: 1px solid #e5e7eb;"> <a${addAttribute(`/blog/leads/${article.data.subcategory}/${article.slug}`, "href")} style="text-decoration: none; color: #3b82f6;"> ${article.data.title} </a> ${article.data.state && renderTemplate`<span style="background: #f3e8ff; padding: 0.25rem 0.5rem; border-radius: 0.25rem; margin-left: 0.5rem; font-size: 0.875rem;"> ${article.data.state} </span>`} </li>`)} </ul> </section>`} </main> </body></html>`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/find-help/index.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/blog/find-help/index.astro";
const $$url = "/blog/find-help";

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_14 as _ };

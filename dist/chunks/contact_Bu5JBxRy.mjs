/* empty css                                  */
import { c as createComponent, r as renderComponent, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import { c as config, $ as $$Base } from './Base_CKfait4E.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Contact AutoInsureGuides";
  const description = "Have questions about auto insurance? Need help understanding coverage options? Our team is here to help.";
  const meta_title = "Contact Us | AutoInsureGuides";
  const image = "/images/contact-hero.jpg";
  const { contact_form_action } = config.params;
  const { address, email, phone } = config.contactinfo || {};
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image })}`;
}, "C:/Users/NefuTrades/autoinsureguides/src/pages/contact.astro", void 0);

const $$file = "C:/Users/NefuTrades/autoinsureguides/src/pages/contact.astro";
const $$url = "/contact";

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_25 as _ };

import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>gated: false</p>\n<h1 id=\"start-saving-on-car-insurance\">Start Saving on Car Insurance</h1>\n<p>Auto insurance premiums keep rising, but you don”t have to pay more. Here are 7 proven strategies:</p>\n<h2 id=\"1-compare-quotes-every-6-months\">1. Compare Quotes Every 6 Months</h2>\n<p>Rates change constantly. Shopping around is the #1 way to save.</p>\n<h2 id=\"2-bundle-policies\">2. Bundle Policies</h2>\n<p>Combine auto + home/renters insurance for up to 25% off.</p>\n<h2 id=\"3-ask-about-every-discount\">3. Ask About Every Discount</h2>\n<ul>\n<li>Safe driver</li>\n<li>Good student</li>\n<li>Multi-car</li>\n<li>Pay-in-full</li>\n<li>Paperless billing</li>\n</ul>\n<p>[Continue reading for all 7 strategies…]</p>";

				const frontmatter = {"gated":false,"title":"7 Ways to Save $500+ on Car Insurance This Year","description":"Proven strategies to lower your auto insurance premiums. Average drivers save $489/year using these tips.","date":"2024-01-15","author":"AutoInsureGuides Team","category":"saving-money","tags":["savings","discounts","money-tips"],"featured":true};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/posts/saving-money-discounts/save-500-on-insurance.md";
				const url = undefined;
				function rawContent() {
					return "gated: false\n# Start Saving on Car Insurance\n\nAuto insurance premiums keep rising, but you don''t have to pay more. Here are 7 proven strategies:\n\n## 1. Compare Quotes Every 6 Months\nRates change constantly. Shopping around is the #1 way to save.\n\n## 2. Bundle Policies\nCombine auto + home/renters insurance for up to 25% off.\n\n## 3. Ask About Every Discount\n- Safe driver\n- Good student  \n- Multi-car\n- Pay-in-full\n- Paperless billing\n\n[Continue reading for all 7 strategies...]\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"start-saving-on-car-insurance","text":"Start Saving on Car Insurance"},{"depth":2,"slug":"1-compare-quotes-every-6-months","text":"1. Compare Quotes Every 6 Months"},{"depth":2,"slug":"2-bundle-policies","text":"2. Bundle Policies"},{"depth":2,"slug":"3-ask-about-every-discount","text":"3. Ask About Every Discount"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>gated: false</p>\n<h1 id=\"how-your-credit-score-affects-insurance-rates\">How Your Credit Score Affects Insurance Rates</h1>\n<p>This is a sample article about how your credit score affects insurance rates.</p>\n<h2 id=\"key-points\">Key Points</h2>\n<ul>\n<li>Important information about this topic</li>\n<li>Expert tips and recommendations</li>\n<li>Common mistakes to avoid</li>\n<li>Money-saving strategies</li>\n</ul>\n<h2 id=\"detailed-explanation\">Detailed Explanation</h2>\n<p>Add detailed content here about how your credit score affects insurance rates.</p>\n<p>Check out our <a href=\"/tools\">insurance tools</a> for more resources.</p>";

				const frontmatter = {"gated":false,"title":"How Your Credit Score Affects Insurance Rates","description":"Learn everything about how your credit score affects insurance rates. Expert tips and guidance from AutoInsureGuides.","date":"2026-01-07","author":"AutoInsureGuides Team","category":"saving-money-discounts","tags":["saving","insurance","guide"],"featured":false,"draft":false};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/posts/saving-money-discounts/credit-score-insurance-impact.md";
				const url = undefined;
				function rawContent() {
					return "gated: false\n# How Your Credit Score Affects Insurance Rates\n\nThis is a sample article about how your credit score affects insurance rates.\n\n## Key Points\n- Important information about this topic\n- Expert tips and recommendations  \n- Common mistakes to avoid\n- Money-saving strategies\n\n## Detailed Explanation\nAdd detailed content here about how your credit score affects insurance rates.\n\nCheck out our [insurance tools](/tools) for more resources.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"how-your-credit-score-affects-insurance-rates","text":"How Your Credit Score Affects Insurance Rates"},{"depth":2,"slug":"key-points","text":"Key Points"},{"depth":2,"slug":"detailed-explanation","text":"Detailed Explanation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

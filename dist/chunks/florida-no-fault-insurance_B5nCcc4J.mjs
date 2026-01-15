import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>gated: false</p>\n<h1 id=\"florida-no-fault-insurance-explained\">Florida No-Fault Insurance Explained</h1>\n<p>This is a sample article about florida no-fault insurance explained.</p>\n<h2 id=\"key-points\">Key Points</h2>\n<ul>\n<li>Important information about this topic</li>\n<li>Expert tips and recommendations</li>\n<li>Common mistakes to avoid</li>\n<li>Money-saving strategies</li>\n</ul>\n<h2 id=\"detailed-explanation\">Detailed Explanation</h2>\n<p>Add detailed content here about florida no-fault insurance explained.</p>\n<p>Check out our <a href=\"/tools\">insurance tools</a> for more resources.</p>";

				const frontmatter = {"gated":false,"title":"Florida No-Fault Insurance Explained","description":"Learn everything about florida no-fault insurance explained. Expert tips and guidance from AutoInsureGuides.","date":"2026-01-07","author":"AutoInsureGuides Team","category":"state-insurance-guides","tags":["state","insurance","guide"],"featured":false,"draft":false};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/posts/state-insurance-guides/florida-no-fault-insurance.md";
				const url = undefined;
				function rawContent() {
					return "gated: false\n# Florida No-Fault Insurance Explained\n\nThis is a sample article about florida no-fault insurance explained.\n\n## Key Points\n- Important information about this topic\n- Expert tips and recommendations  \n- Common mistakes to avoid\n- Money-saving strategies\n\n## Detailed Explanation\nAdd detailed content here about florida no-fault insurance explained.\n\nCheck out our [insurance tools](/tools) for more resources.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"florida-no-fault-insurance-explained","text":"Florida No-Fault Insurance Explained"},{"depth":2,"slug":"key-points","text":"Key Points"},{"depth":2,"slug":"detailed-explanation","text":"Detailed Explanation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

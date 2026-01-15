import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>gated: false</p>\n<h1 id=\"how-to-file-an-insurance-claim-successfully\">How to File an Insurance Claim Successfully</h1>\n<p>This is a sample article about how to file an insurance claim successfully.</p>\n<h2 id=\"key-points\">Key Points</h2>\n<ul>\n<li>Important information about this topic</li>\n<li>Expert tips and recommendations</li>\n<li>Common mistakes to avoid</li>\n<li>Money-saving strategies</li>\n</ul>\n<h2 id=\"detailed-explanation\">Detailed Explanation</h2>\n<p>Add detailed content here about how to file an insurance claim successfully.</p>\n<p>Check out our <a href=\"/tools\">insurance tools</a> for more resources.</p>";

				const frontmatter = {"gated":false,"title":"How to File an Insurance Claim Successfully","description":"Learn everything about how to file an insurance claim successfully. Expert tips and guidance from AutoInsureGuides.","date":"2026-01-07","author":"AutoInsureGuides Team","category":"claims-accidents-help","tags":["claims","insurance","guide"],"featured":false,"draft":false};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/posts/claims-accidents-help/how-to-file-insurance-claim.md";
				const url = undefined;
				function rawContent() {
					return "gated: false\n# How to File an Insurance Claim Successfully\n\nThis is a sample article about how to file an insurance claim successfully.\n\n## Key Points\n- Important information about this topic\n- Expert tips and recommendations  \n- Common mistakes to avoid\n- Money-saving strategies\n\n## Detailed Explanation\nAdd detailed content here about how to file an insurance claim successfully.\n\nCheck out our [insurance tools](/tools) for more resources.\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"how-to-file-an-insurance-claim-successfully","text":"How to File an Insurance Claim Successfully"},{"depth":2,"slug":"key-points","text":"Key Points"},{"depth":2,"slug":"detailed-explanation","text":"Detailed Explanation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

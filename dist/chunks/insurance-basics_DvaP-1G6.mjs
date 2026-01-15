import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>gated: false</p>\n<h1 id=\"understanding-car-insurance\">Understanding Car Insurance</h1>\n<p>New to car insurance? Start here:</p>\n<h2 id=\"liability-coverage\">Liability Coverage</h2>\n<p>Covers damage YOU cause to others. Required in every state.</p>\n<h2 id=\"comprehensive--collision\">Comprehensive &#x26; Collision</h2>\n<p>Covers damage to YOUR vehicle. Optional but often required by lenders.</p>\n<h2 id=\"deductibles\">Deductibles</h2>\n<p>The amount you pay before insurance kicks in. Higher deductible = lower premium.</p>\n<p>[Learn more about each coverage type…]</p>";

				const frontmatter = {"gated":false,"title":"Car Insurance Basics: What Every Driver Needs to Know","description":"Understanding liability, comprehensive, collision, and other essential auto insurance coverages.","date":"2024-01-05","author":"AutoInsureGuides Team","category":"car-insurance-basics","tags":["basics","coverage","liability"]};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/posts/car-insurance-basics/insurance-basics.md";
				const url = undefined;
				function rawContent() {
					return "gated: false\n# Understanding Car Insurance\n\nNew to car insurance? Start here:\n\n## Liability Coverage\nCovers damage YOU cause to others. Required in every state.\n\n## Comprehensive & Collision\nCovers damage to YOUR vehicle. Optional but often required by lenders.\n\n## Deductibles\nThe amount you pay before insurance kicks in. Higher deductible = lower premium.\n\n[Learn more about each coverage type...]\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"understanding-car-insurance","text":"Understanding Car Insurance"},{"depth":2,"slug":"liability-coverage","text":"Liability Coverage"},{"depth":2,"slug":"comprehensive--collision","text":"Comprehensive & Collision"},{"depth":2,"slug":"deductibles","text":"Deductibles"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

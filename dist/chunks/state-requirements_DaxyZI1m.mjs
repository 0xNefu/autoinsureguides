import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>gated: false</p>\n<h1 id=\"state-insurance-requirements\">State Insurance Requirements</h1>\n<p>Every state has different minimum coverage requirements. Here”s what you need:</p>\n<h2 id=\"california\">California</h2>\n<ul>\n<li>Bodily Injury: $15,000/$30,000</li>\n<li>Property Damage: $5,000</li>\n<li>Uninsured Motorist: Optional</li>\n</ul>\n<h2 id=\"texas\">Texas</h2>\n<ul>\n<li>Bodily Injury: $30,000/$60,000</li>\n<li>Property Damage: $25,000</li>\n</ul>\n<h2 id=\"florida\">Florida</h2>\n<ul>\n<li>PIP: $10,000</li>\n<li>Property Damage: $10,000</li>\n</ul>\n<p>[Full list for all 50 states…]</p>";

				const frontmatter = {"gated":false,"title":"State Minimum Car Insurance Requirements (2024 Guide)","description":"Complete guide to auto insurance requirements in all 50 states. Know your state''s minimum coverage.","date":"2024-01-10","author":"AutoInsureGuides Team","category":"state-guides","tags":["state-laws","requirements","coverage"]};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/posts/state-insurance-guides/state-requirements.md";
				const url = undefined;
				function rawContent() {
					return "gated: false\n# State Insurance Requirements\n\nEvery state has different minimum coverage requirements. Here''s what you need:\n\n## California\n- Bodily Injury: $15,000/$30,000\n- Property Damage: $5,000\n- Uninsured Motorist: Optional\n\n## Texas  \n- Bodily Injury: $30,000/$60,000\n- Property Damage: $25,000\n\n## Florida\n- PIP: $10,000\n- Property Damage: $10,000\n\n[Full list for all 50 states...]\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"state-insurance-requirements","text":"State Insurance Requirements"},{"depth":2,"slug":"california","text":"California"},{"depth":2,"slug":"texas","text":"Texas"},{"depth":2,"slug":"florida","text":"Florida"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

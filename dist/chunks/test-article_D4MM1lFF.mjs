import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"this-is-a-test-article\">This is a Test Article</h1>\n<p>This article is located at: <code>/blog/auto-insurance/california/test-article</code></p>\n<p>If you can see this, the dynamic routing is working correctly!</p>\n<h2 id=\"california-specific-information\">California-Specific Information</h2>\n<ul>\n<li>Minimum liability: $15,000/$30,000/$5,000</li>\n<li>State-specific regulations apply</li>\n<li>Local insurance requirements</li>\n</ul>\n<h2 id=\"next-steps\">Next Steps</h2>\n<ol>\n<li>Create more state-specific articles</li>\n<li>Build the navigation menu</li>\n<li>Add monetization components</li>\n</ol>";

				const frontmatter = {"title":"Test Article: California Auto Insurance Basics","description":"A test article to verify the 4-pillar routing structure works","date":"2024-01-15T00:00:00.000Z","state":"CA","pillar":"auto-insurance","subcategory":"california","featured":false,"draft":false,"noindex":true};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/auto-insurance/california/test-article.md";
				const url = undefined;
				function rawContent() {
					return "\n# This is a Test Article\n\nThis article is located at: `/blog/auto-insurance/california/test-article`\n\nIf you can see this, the dynamic routing is working correctly!\n\n## California-Specific Information\n\n* Minimum liability: $15,000/$30,000/$5,000\n* State-specific regulations apply\n* Local insurance requirements\n\n## Next Steps\n\n1. Create more state-specific articles\n2. Build the navigation menu\n3. Add monetization components\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"this-is-a-test-article","text":"This is a Test Article"},{"depth":2,"slug":"california-specific-information","text":"California-Specific Information"},{"depth":2,"slug":"next-steps","text":"Next Steps"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

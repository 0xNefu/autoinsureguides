import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"find-local-help-in-new-york\">Find Local Help in New York</h1>\n<h2 id=\"overview\">Overview</h2>\n<p>New York has specific requirements and regulations for Find Local Help. This guide covers everything you need to know.</p>\n<h2 id=\"key-information\">Key Information</h2>\n<h3 id=\"requirements-in-new-york\">Requirements in New York</h3>\n<ul>\n<li>State-specific regulations</li>\n<li>Minimum coverage requirements</li>\n<li>Local compliance rules</li>\n</ul>\n<h3 id=\"getting-help-in-new-york\">Getting Help in New York</h3>\n<ul>\n<li>Local resources and contacts</li>\n<li>State agencies and departments</li>\n<li>Professional services available</li>\n</ul>\n<h3 id=\"common-questions\">Common Questions</h3>\n<ul>\n<li>Frequently asked questions about Find Local Help in New York</li>\n<li>State-specific concerns and solutions</li>\n<li>Tips for navigating local requirements</li>\n</ul>\n<h2 id=\"next-steps\">Next Steps</h2>\n<p>For more detailed information or to get personalized help with Find Local Help in New York, consult with local professionals or state agencies.</p>\n<hr>\n<p><em>This is a template article for Find Local Help in New York. Update with specific state information.</em></p>";

				const frontmatter = {"pillar":"find-help","subcategory":"new-york","title":"Find Local Help in New York","description":"Complete guide to Find Local Help in New York. Get state-specific information, requirements, and local resources.","date":"2024-01-15T00:00:00.000Z","state":"new-york","featured":false,"draft":false,"noindex":false};
				const file = "C:/Users/NefuTrades/autoinsureguides/src/content/find-help/new-york.md";
				const url = undefined;
				function rawContent() {
					return "# Find Local Help in New York\n\n## Overview\n\nNew York has specific requirements and regulations for Find Local Help. This guide covers everything you need to know.\n\n## Key Information\n\n### Requirements in New York\n- State-specific regulations\n- Minimum coverage requirements\n- Local compliance rules\n\n### Getting Help in New York\n- Local resources and contacts\n- State agencies and departments\n- Professional services available\n\n### Common Questions\n- Frequently asked questions about Find Local Help in New York\n- State-specific concerns and solutions\n- Tips for navigating local requirements\n\n## Next Steps\n\nFor more detailed information or to get personalized help with Find Local Help in New York, consult with local professionals or state agencies.\n\n---\n\n*This is a template article for Find Local Help in New York. Update with specific state information.*\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"find-local-help-in-new-york","text":"Find Local Help in New York"},{"depth":2,"slug":"overview","text":"Overview"},{"depth":2,"slug":"key-information","text":"Key Information"},{"depth":3,"slug":"requirements-in-new-york","text":"Requirements in New York"},{"depth":3,"slug":"getting-help-in-new-york","text":"Getting Help in New York"},{"depth":3,"slug":"common-questions","text":"Common Questions"},{"depth":2,"slug":"next-steps","text":"Next Steps"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

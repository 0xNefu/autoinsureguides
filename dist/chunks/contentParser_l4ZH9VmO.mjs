import { slug } from 'github-slugger';
import { marked } from 'marked';
import { c as createComponent, a as renderTemplate } from './astro/server_BH2CgaJp.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DNkqUFJX.mjs';

const slugify = (content) => {
  return slug(content);
};
const markdownify = (content, div) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};
const humanize = (content) => {
  return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/[-\s]+/g, " ").replace(/^[a-z]/, function(m) {
    return m.toUpperCase();
  });
};
const plainify = (content) => {
  const parseMarkdown = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

const getSinglePage = async (collectionName) => {
  return await getCollection(collectionName, ({ data }) => {
    return data.draft !== true;
  });
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/NefuTrades/autoinsureguides/src/lib/contentParser.astro", void 0);

export { getSinglePage as g, humanize as h, markdownify as m, plainify as p, slugify as s };

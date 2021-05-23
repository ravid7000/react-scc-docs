import fs from 'fs';
import path from 'path';
import marked from 'marked';
import grayMatter from 'gray-matter';
import slugify from 'slugify';

function extractFrontMatter(markdown) {
  const token = '---';
  const firstIdx = markdown.indexOf(token) + token.length;
  const lastIdx = markdown.indexOf(token, firstIdx);

  const metaStr = markdown.substring(firstIdx, lastIdx);
  const content = markdown.substring(lastIdx + token.length);
  return {
    metadata: grayMatter(`${token}${metaStr}${token}`).data,
    content,
  }
}

export function getSections() {
  return fs.readdirSync('content/docs')
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map((file) => {
      const markdown = fs.readFileSync(`content/docs/${file}`, 'utf-8');

      const { metadata, content } = extractFrontMatter(markdown)

      const slug = slugify(metadata.title, {
        strict: true,
        lower: true,
      });

      const html = marked(content);
      return {
        html,
        metadata,
        slug,
      }
    })
}
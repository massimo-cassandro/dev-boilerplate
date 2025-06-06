const fs = require ('fs');
const path = require ('path');
const DOMPurify = require ('isomorphic-dompurify');
const { marked } = require ('marked');

function getMarkdownFiles() {
  const file = path.resolve(__dirname, './test.md');

  const result = {
    content: DOMPurify.sanitize(marked.parse(fs.readFileSync(file, 'utf-8'))),
  };

  console.log(result);
  return result;
}

module.exports = getMarkdownFiles;

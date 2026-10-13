const fs = require('fs');

const files = [
  'membran-mutfak-dolabi.html',
  'matplus-mutfak-dolabi.html',
  'akrilik-mutfak-dolabi.html',
  'lake-mutfak-dolabi.html',
  'high-gloss-mutfak-dolabi.html',
  'banyo-dolabi.html',
  'banyo-tadilat-yenileme.html',
  'gardirop-modelleri.html'
];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const hasArticleTag = /<article\b/i.test(content);
  const articleSchema = /Article|BlogPosting/i.test(content);
  const schemaMatches = [...content.matchAll(/"@type":\s*"([^"]+)"/g)].map(m => m[1]);
  const wordCount = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log(file, {
    hasArticleTag,
    articleSchema,
    schemas: [...new Set(schemaMatches)],
    wordCount,
    lineCount: content.split('\n').length
  });
}

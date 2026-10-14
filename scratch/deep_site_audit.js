const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const findings = {
  missingLcpFetchPriority: [],
  missingImageDimensions: [],
  missingMetaDescription: [],
  missingCanonical: [],
  missingOpenGraph: [],
  missingSchemaOrg: [],
  missingH1: [],
  multipleH1: [],
  heavyInlineScripts: [],
  missingAlt: [],
  viewportIssues: [],
  tapTargetRisk: []
};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // 1. Meta & SEO
  if (!content.includes('<meta name="description"')) {
    findings.missingMetaDescription.push(file);
  }
  if (!content.includes('<link rel="canonical"')) {
    findings.missingCanonical.push(file);
  }
  if (!content.includes('<meta property="og:title"')) {
    findings.missingOpenGraph.push(file);
  }
  if (!content.includes('application/ld+json')) {
    findings.missingSchemaOrg.push(file);
  }

  // 2. Headings
  const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length === 0) findings.missingH1.push(file);
  if (h1Matches.length > 1) findings.multipleH1.push({ file, count: h1Matches.length });

  // 3. Images - LCP & PageSpeed
  const imgMatches = [...content.matchAll(/<img([^>]+)>/gi)];
  let hasFirstImgPriority = false;
  imgMatches.forEach((m, idx) => {
    const attrs = m[1];
    if (idx === 0) {
      if (attrs.includes('fetchpriority="high"') || attrs.includes("fetchpriority='high'")) {
        hasFirstImgPriority = true;
      }
    }
    if (!attrs.includes('width=') || !attrs.includes('height=')) {
      findings.missingImageDimensions.push({ file, img: m[0].substring(0, 80) });
    }
    if (!attrs.includes('alt=')) {
      findings.missingAlt.push({ file, img: m[0].substring(0, 80) });
    }
  });

  if (imgMatches.length > 0 && !hasFirstImgPriority) {
    findings.missingLcpFetchPriority.push(file);
  }
});

console.log('=== DEEP AUDIT RESULTS ===');
console.log('Missing Meta Description:', findings.missingMetaDescription.length, findings.missingMetaDescription);
console.log('Missing Canonical:', findings.missingCanonical.length, findings.missingCanonical);
console.log('Missing OpenGraph:', findings.missingOpenGraph.length, findings.missingOpenGraph);
console.log('Missing Schema.org JSON-LD:', findings.missingSchemaOrg.length, findings.missingSchemaOrg);
console.log('Missing H1:', findings.missingH1.length, findings.missingH1);
console.log('Multiple H1:', findings.multipleH1.length, findings.multipleH1);
console.log('Missing Image Dimensions:', findings.missingImageDimensions.length);
console.log('Missing Alt Tags:', findings.missingAlt.length);
console.log('Missing LCP fetchpriority="high":', findings.missingLcpFetchPriority.length, findings.missingLcpFetchPriority);

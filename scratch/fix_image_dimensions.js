const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const updated = content.replace(/<img\b([^>]*?)>/gi, (fullMatch, attrs) => {
    // If width or height is missing
    const hasWidth = /\bwidth\s*=/i.test(attrs);
    const hasHeight = /\bheight\s*=/i.test(attrs);

    if (hasWidth && hasHeight) return fullMatch;

    let newAttrs = attrs;

    // Check if it's a portrait slot
    if (attrs.includes('portrait') || file === 'kapi-modelleri.html' || attrs.includes('oda-kapi') || attrs.includes('camli-kapi')) {
      if (!hasWidth) newAttrs += ' width="600"';
      if (!hasHeight) newAttrs += ' height="750"';
    } else if (attrs.includes('hero') || attrs.includes('width: 100%') || attrs.includes('max-height: 480px')) {
      if (!hasWidth) newAttrs += ' width="1200"';
      if (!hasHeight) newAttrs += ' height="675"';
    } else {
      if (!hasWidth) newAttrs += ' width="600"';
      if (!hasHeight) newAttrs += ' height="375"';
    }

    changed = true;
    return `<img${newAttrs}>`;
  });

  if (changed) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`Added missing width/height to images in: ${file}`);
  }
});

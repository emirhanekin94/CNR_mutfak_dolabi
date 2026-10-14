fetch('http://localhost:3000/')
  .then(res => {
    console.log('HTTP Status:', res.status);
    return res.text();
  })
  .then(html => {
    console.log('hero-visual-frame found:', html.includes('hero-visual-frame'));
    console.log('editorial-collection-bar found:', html.includes('editorial-collection-bar'));
    console.log('btn-hero-primary found:', html.includes('btn-hero-primary'));
    console.log('btn-hero-secondary found:', html.includes('btn-hero-secondary'));
    console.log('hero-trust-bar found:', html.includes('hero-trust-bar'));
    console.log('id="modeller" found:', html.includes('id="modeller"'));
    console.log('Test completed successfully!');
  })
  .catch(err => console.error('Fetch error:', err));

const fs = require('fs');
let c = fs.readFileSync('banyo-dolabi.html', 'utf8');

c = c.replace('      </div>\n\n      </div>\n    </div>\n  </section>', '      </div>\n    </div>\n  </section>');
fs.writeFileSync('banyo-dolabi.html', c, 'utf8');

const openDivs = (c.match(/<div[\s>]/g) || []).length;
const closeDivs = (c.match(/<\/div>/g) || []).length;
console.log('banyo-dolabi.html div balance:', openDivs, 'open vs', closeDivs, 'close (diff:', openDivs - closeDivs, ')');


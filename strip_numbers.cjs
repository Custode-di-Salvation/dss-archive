const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // match lines starting with 1 to 6 hashes, a space, one or more digits, a dot, and a space
      const newContent = content.replace(/^(#{1,6})\s+\d+\.\s+/gm, '$1 ');
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Stripped numbers in:', fullPath);
      }
    }
  }
}

processDir('./src/content/fop');
processDir('./src/content/scp');

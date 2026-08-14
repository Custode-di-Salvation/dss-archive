import fs from 'fs';
const file = fs.readFileSync('src/content/fop/fop-0580/index.md', 'utf-8');
const lines = file.split('\n');
const tasks = lines.filter(l => l.startsWith('- [ ]'));
console.log(tasks);

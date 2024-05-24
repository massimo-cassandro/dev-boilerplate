/* eslint-disable no-console */
/* eslint-env node */

import { basic_packages, std_packages, m_packages, cmds } from './snippets-list.mjs';
import { writeFileSync } from 'fs';

import * as path from 'path';

// oppure
const __dirname = new URL('.', import.meta.url).pathname;


const target_file = path.resolve(__dirname, '../snippets.md');


let content = [
  {name: 'Base', packages: basic_packages},
  {name: 'Standard', packages: std_packages},
  {name: '@m', packages: m_packages},

].map( i => {
  return `## ${i.name}\n` +
    '-'.repeat(40) + '\n' +
    i.packages.map(p => {
      return `### ${p.label}\n` +
        `npm i ${p.dev? '-D' : '-S'} ${p.packages.join(' ')}\n\n`;
    }).join('');
}).join('\n\n');


content +=  '\n\n## Cmds\n' + '-'.repeat(40) + '\n' + cmds.map( i => {
  return `### ${i.label}\n` +
    `${i.cmd}`;
}).join('\n\n');

writeFileSync(target_file, '# Packages install list\n\n' + content);

console.log(`...wrote to ${target_file}`);

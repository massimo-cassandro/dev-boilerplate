/* eslint-disable no-console */

import { basic_packages, std_packages, m_packages, cmds } from './snippets-list.mjs';
import { writeFileSync } from 'fs';

import * as path from 'path';

import * as fs from 'fs';

// oppure
const __dirname = new URL('.', import.meta.url).pathname;


const target_file = path.resolve(__dirname, '../snippets.md');

const parsed_packages = {}; // per utilizzo in cmds

let content = [
  {name: 'Base', packages: basic_packages},
  {name: 'Standard', packages: std_packages},
  {name: '@m', packages: m_packages},

].map( i => {
  return `## ${i.name}\n` +
    '-'.repeat(40) + '\n' +
    i.packages.map(p => {

      parsed_packages[p.label] = `npm i ${p.dev? '-D' : '-S'} ${p.packages.join(' ')}`;

      return `### ${p.label}\n` +
        `${parsed_packages[p.label]}\n\n`;
    }).join('');
}).join('\n\n');


content +=  '\n\n## Cmds\n' + '-'.repeat(40) + '\n' + cmds.map( i => {
  const cmds = [
    ...(i.cmd? [i.cmd] : []),
    ...(i.packages? [`${i.packages.map(p => parsed_packages[p]).join(' && ')}`] : []),
    // ...(i.addConfigFile? i.addConfigFile.map(f => `cp -f ${f} .`) : [])
  ];

  if(i.addConfigFile && Array.isArray(i.addConfigFile)) {

    i.addConfigFile.forEach( configFile => {
      const filePath = path.resolve(__dirname, `../config_files/${configFile}`),
        file_content = fs.readFileSync(filePath, 'utf8').replace(/\n/g, '\\n');
      cmds.push(`echo "${file_content}" > ${configFile.replace(/^_/, '.')}`);
    });

  }

  return `### ${i.label}\n` + cmds.join(' && ');

}).join('\n\n');

writeFileSync(target_file, '# Packages install list\n\n' + content);

console.log(`...wrote to ${target_file}`);

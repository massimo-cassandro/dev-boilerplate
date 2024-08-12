/* eslint-disable no-console */

import { std_packages, m_packages, cmds } from './snippets-list.mjs';
import { writeFileSync } from 'fs';

import * as path from 'path';

import * as fs from 'fs';

// oppure
const __dirname = new URL('.', import.meta.url).pathname;


const target_file = path.resolve(__dirname, '../README.md');

const parsed_packages = {}; // per utilizzo in cmds
const md_code_block = code => '```bash\n' + code + '\n```\n';

const packages_content = [
  {name: 'Packages', packages: std_packages},
  {name: '@m', packages: m_packages},

].map( i => {
  return `## ${i.name}\n` +
    i.packages.map(p => {

      const packages_groups = [];
      let group_index = 0;
      p.packages.forEach( pp => {
        if(Array.isArray(pp)) {
          packages_groups.push(pp);
          group_index++;
        } else {
          packages_groups[group_index] ??= [];
          packages_groups[group_index].push(pp);
        }
      });

      // Object.values -> campatta sparse arrays
      parsed_packages[p.id] = packages_groups.map(pg => {
        return `npm i ${p.dev? '-D' : '-S'} ${pg.join(' ')}`;
      }).join( ' && ');

      return `### ${p.label}\n` +
        md_code_block( parsed_packages[p.id] );
    }).join('');
}).join('\n\n');



const cmd_content =  '\n\n## Install & config\n' + '\n' + cmds.map( i => {
  const cmds = [
    ...(i.cmd? [i.cmd] : []),
    ...(i.uninstall? [
      `${i.uninstall.map(p =>
        parsed_packages[p].replace(/(@\^?[\d|.]+)/g, '').replace(/npm i -./g, 'npm uninstall')
      ).join(' && ')}`
    ] : []),
    ...(i.packages? [`${i.packages.map(p => parsed_packages[p]).join(' && ')}`] : []),
    // ...(i.addConfigFile? i.addConfigFile.map(f => `cp -f ${f} .`) : [])
  ];

  if(i.addConfigFile && Array.isArray(i.addConfigFile)) {

    i.addConfigFile.forEach( configFile => {
      const filePath = path.resolve(__dirname, `../config_files/${configFile}`),
        file_content = fs.readFileSync(filePath, 'utf8').replace(/\n/g, '\\n');
      cmds.push(
        'echo "' + file_content +`" > ${configFile.replace(/^_/, '.')}`
      );
    });

  }

  return `### ${i.label}\n` + md_code_block(cmds.join(' && '));

}).join('\n\n');




writeFileSync(target_file, '# Setup snippets\n' + cmd_content + packages_content, 'utf-8');

console.log(`...wrote to ${target_file}`);

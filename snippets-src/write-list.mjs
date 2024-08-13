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

const makeInstallString = (packageArray, isDev) => {
  return `npm i ${isDev? '-D' : '-S'} ${packageArray.join(' ')}`;
};

const packages_content = [
  {name: 'Packages', packages_array: std_packages},
  {name: '@m', packages_array: m_packages},

].map( i => {
  return `## ${i.name}\n` +
    i.packages_array.toSorted((a,b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()))
      .map(packageObj => {

        const temp = [];

        ['packages', 'dev_packages'].forEach( packageType => {

          const isDev = packageType === 'dev_packages';

          if(packageObj[packageType] && packageObj[packageType].length) {

            // se il primo elemento è un array si tratta di un array di array
            if(Array.isArray(packageObj[packageType][0])) {
              temp.push(
                packageObj[packageType].map( pp => makeInstallString(pp, isDev)).join(' && ')
              );

            } else {
              temp.push(makeInstallString(packageObj[packageType], isDev));
            }

          }


          parsed_packages[packageObj.id]= temp.join( ' && ');

        });

        return `### ${packageObj.label}\n` + md_code_block( parsed_packages[packageObj.id] );

      }).join(''); // end map packageObj

}).join('\n\n'); // end map



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

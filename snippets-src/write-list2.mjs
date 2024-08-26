/* eslint-disable no-console */

import snippets_list from './snippets-list2.mjs';
import chalk from 'chalk';

import { writeFileSync } from 'fs';
import * as path from 'path';
import * as fs from 'fs';


const default_obj = {
  id: null,               // id univoco
  label: null,
  descr: [],              // renderizzati come '* ...'
  descr_cmds: [],         // renderizzati come '* `...`'
  cmds: [],               // renderizzati come '``` ... ```'

  packages: [],           // renderizzati come `npm i --S ...` o `--D ...`, se presenti dei subarray
  dev_packages: [],       // vengono renderizati come `npm i` distinti
  addConfigFile: [],      // files in `config_files` da rirpodurre con `echo` e `>>`

  resolve: [],            // lista di id del json, vengono risolti secondo le indicazioni di ciascun oggetto indicato
  resolve_uninstall: [],  // lista di id del json, i pacchetti relativi vengono renderizzati come `npm uninstall ...`

  fav: false,             // se true, il pacchetto viene considerato tra i preferiti e messo in cima alla lista
};


const __dirname = new URL('.', import.meta.url).pathname
  // ,target_file = path.resolve(__dirname, '../README.md');
  ,target_file = path.resolve(__dirname, './test.md')

  ,md_code_block = code => (code && code.length)? '```bash\n' + code + '\n```\n' : null

  ,md_descr_block = (descr_array, isCode = false) => {
    const codeDelimiter = isCode? '`' : '';
    return (descr_array && descr_array.length)? descr_array
      .map( i => '* ' + codeDelimiter + i + codeDelimiter).join('\n') : null;
  }
  ,makeInstallString = (packageArray, isDev) => {
    return `npm i ${isDev? '-D' : '-S'} ${packageArray.join(' ')}`;
  }
;
console.log(snippets_list);
try {

  // check duplicated id
  const ids = snippets_list.map( item => item.id?? null);
  ids.forEach((i, idx) => {
    if(i !== null && ids.indexOf(i) !== -1 && ids.indexOf(i) !== idx) {
      throw `Duplicated id: ${i}`;
    }
  });


  const content = snippets_list
    .toSorted((a, b) => a.label.localeCompare(b.label) || Number(a.fav?? 0) - Number(b.fav?? 0))
    .map( item => {
      item = {...default_obj, ...item};

      return [
        '## ' + (item.label?? '???'),
        md_descr_block(item.descr),
        md_descr_block(item.descr_cmds, true),
        md_code_block(item.cmds),

      ].filter(i => i !== null).join('\n\n');


    });

  writeFileSync(target_file, '# Setup snippets\n' + content.join('\n\n'), 'utf-8');
  console.log('');
  console.log(chalk.bgGreen.bold(` Done -> ${target_file} `));
  console.log('');


} catch(e) {
  console.log('\x07');
  console.log(chalk.bgRed.bold(` ${e} `));
}

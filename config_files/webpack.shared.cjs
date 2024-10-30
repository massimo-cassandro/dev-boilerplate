const path = require('path');

const jsConfig = require(path.join(__dirname, '/jsconfig.json'));

// utilizzata anche dal config della dashboard
const aliases = {};

for(const item in jsConfig.compilerOptions.paths) {

  const key = item.replace(/(\/\*)$/, ''),
    value = path.resolve(__dirname, jsConfig.compilerOptions.paths[item][0].replace(/(\/\*)$/, ''));


  aliases[key] = value;
}

// console.log(aliases);

module.exports = aliases;

const rl = require('./utils/readline')();
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const destPath = path.resolve(__dirname, '../src/apps');

(async function createModule() {
  let moduleName = await rl.rlquestion("input the new app's name, this will be used for create directory: ");
  if(moduleName.trim() === '') {
    console.log(chalk.red(`模块名不能为空`))
    process.exit();
  } 
  generateFiles(moduleName)
    .then(dest => {
      console.log(chalk.green(`init success, see ${dest}`));
      rl.close();
      process.exit();
    }).catch(errMsg => {
      console.log(chalk.red(errMsg || 'init fail'));
      process.exit();
    })
})();

function generateFiles (moduleName) {
  const modulePath = path.join(destPath, moduleName);
  return new Promise((resolve, reject) => {
    if(fs.existsSync(modulePath)) {
      reject(`模块名为${moduleName}的模块已经存在`)
    } else {
      fs.mkdirSync(modulePath);
      fs.createWriteStream(path.resolve(modulePath, 'index.js'));
      resolve(modulePath);
    }
  })
}
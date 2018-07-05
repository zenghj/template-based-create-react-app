const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

console.log(resolveApp(`src/pages/${process.env.APP_NAME}/index.js`))
module.exports = {
  appIndexJs: resolveApp(`src/pages/${process.env.APP_NAME}/index.js`),
}
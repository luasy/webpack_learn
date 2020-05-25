const path = require('path');

module.exports = {
  mode: 'development',

  // entry: [path.resolve('src/index.js'), path.resolve('src/index2.js')],  // 要求绝对路径
  // entry: ['index', 'index2'].map(p => path.resolve(`src/${p}.js`)),  // 要求绝对路径

  // entry: {
  //   app: path.resolve('src/index.js')
  // },

  // entry: {
  //   // 打出的包叫 `app`, 入口文件为 `src/index.js`
  //   app: path.resolve('src/index.js'),
  //   app2: path.resolve('src/index2.js'),
  // },


  entry: () => new Promise(resolve => {
    // 这里可以做一些异步操作。
    resolve(['index', 'index2'].map(p => path.resolve(`src/${p}.js`)))
  })
}

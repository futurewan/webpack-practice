
var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')
var webpackConfig = require('../webpack.prod.config')

var spinner = ora('building for production...')
spinner.start()
webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err){
    throw err
  } else {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  
    console.log(chalk.cyan('  Build complete.\n'))
  }
  
})

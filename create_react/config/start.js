const {merge} = require('webpack-merge')
const config=require('./basic')
module.exports = merge(config,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    compress: true,
    port: 9000,
    historyApiFallback:{
      index: '../public/index.html'
    }
  }
})
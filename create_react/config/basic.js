const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports =
{
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include:/src/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          }
        }, {
          loader: "postcss-loader"
        }, {
          loader: "less-loader"
        }],

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html')}),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  }
}

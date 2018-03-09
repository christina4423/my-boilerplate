const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  //custom code and libraries combined into one
  // entry:{ 
  //   'main': './source/entry-all.js'
  // },
  //separated custom code from third party libraries
  entry: {
    'main': './source/entry-custom.js',
    'libraries': './source/entry-libraries.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!sass-loader" })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!postcss-loader"})
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: 'fonts/[name].[ext]',
          publicPath: '../'
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'fonts/[name].[ext]',
          publicPath: '../'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js',
    chunkFilename: '[id].js'
  },
  devServer: {
    contentBase: './source'
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new HtmlWebPackPlugin({
        filename: 'index.html',
        template: 'template.html.ejs',
        inject: 'body'
    })
  ]
};

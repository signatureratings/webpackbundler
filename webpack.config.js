const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}

/**
 * output:{
 * filename:"[name].[contentHash].js"
 * }
 * 
 *  webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
 * 
 * Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
 * 
 * 
 * they allow you to pre-process files as you import or “load” them.
 * loaders have two properties in your webpack configuration:
->The test property identifies which file or files should be transformed.
->The use property indicates which loader should be used to do the transforming.

 module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' },
  { test: /\.css$/, use: ['style-loader', 'css-loader'] } 
  ],
  },

  While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. 

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
 */

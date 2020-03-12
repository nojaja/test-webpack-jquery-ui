const path = require('path');
const src = __dirname + "/src";
const dist = __dirname + "/dist";
const webpack = require('webpack');
//require('jquery-ui/ui/core.js');
//require('jquery-ui/ui/widgets/resizable.js');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: dist
  },
  context: src,
  entry: {
    main: './js/index.js',
  },
  output: {
    filename: 'bundle.js',
    sourceMapFilename: '[name].map',
    path: dist,
    publicPath:""
  },
  module: {
    rules: [{
      test: /\.css$/,
      loaders: ["style-loader","css-loader"]
    }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader:"file-loader",
        options:{
          name:'[name].[ext]',
          outputPath:'/assets/images/'
        }
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
  ]
};
const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  entry: [
    'whatwg-fetch',
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify ('production'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-decorators-legacy']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"}, 
          {loader: "css-loader"}, 
          {loader: "less-loader"}
        ]
      },
      { 
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      }
    ],
  }
};
'use strict'

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // entry: ['babel-polyfill', './index.js'],
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'WebChat',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src/scss/')]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};

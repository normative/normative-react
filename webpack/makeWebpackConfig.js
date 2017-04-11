'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');
const constants = require('./constants');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require('ip');

const browserSupport = ['ie >= 10', '> 1%'];

let devtool = '';

const makeWebpackConfig = (isDevelopment) => {

  const plugins = [new webpack.NoErrorsPlugin()];

  const entry = [constants.ENTRY_POINT];

  if (isDevelopment) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    entry.push('webpack-hot-middleware/client');
    devtool = 'cheap-module-source-map';
  } else {
    plugins.push(
      new HtmlWebpackPlugin({
        template: constants.SRC_DIR + '/client/index.html',
        isDevelopment
      }),
      new ExtractTextPlugin('app.css', {
        allChunks: true
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // eslint-disable-line camelcase
          warnings: false // Because uglify reports irrelevant warnings.
        },
        output: {
          comments: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    );
  }

  return {
    devtool,
    entry,
    output: {
      filename: 'app.js',
      path: constants.DIST_DIR,
      publicPath: isDevelopment ? 'http://' + ip.address() + ':3000/static/' : '/static/'
    },
    assets: {
      noInfo: true,
      publicPath: isDevelopment ? 'http://' + ip.address() + ':3000/static/' : '/static/'
    },
    plugins,
    resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          loaders: ['babel'],
          include: constants.SRC_DIR
        },
        {
          test: /\.(css)$/,
          loader: isDevelopment ? 'style!css?sourceMap' : ExtractTextPlugin.extract('css'),
          include: constants.NODE_MODULES_DIR
        },
        {
          test: /\.(scss)$/,
          loader: isDevelopment ? 'style!css?sourceMap!sass?outputStyle=expanded!postcss' :
          ExtractTextPlugin.extract('css!sass?outputStyle=compressed!postcss'),
          include: constants.SRC_DIR
        },
        {
          test: /\.(gif|svg|jpg|jpeg|png|woff|woff2|ttf|eot)$/,
          loader: 'url-loader?limit=8192',
          include: constants.SRC_DIR
        }
      ]
    },
    sassLoader: {
      includePaths: [constants.NODE_MODULES_DIR, constants.NODE_MODULES_DIR + '/foundation-sites/scss']
    },
    postcss: () => {
      return [
        stylelint,
        reporter({ clearMessages: true }),
        autoprefixer({
          browsers: browserSupport
        })
      ];
    }
  };
};

module.exports = makeWebpackConfig;

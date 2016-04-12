'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const doiuse = require('doiuse');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');
const constants = require('./constants');

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
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // eslint-disable-line camelcase
          warnings: false // Because uglify reports irrelevant warnings.
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
      publicPath: '/static/'
    },
    assets: {
      noInfo: true,
      publicPath: '/static/'
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
          loaders: ['style', 'css?sourceMap'],
          include: constants.NODE_MODULES_DIR
        },
        {
          test: /\.(scss)$/,
          loaders: ['style', 'css?sourceMap', 'sass?outputStyle=expanded', 'postcss'],
          include: constants.SRC_DIR
        },
        {
          test: /\.(svg|jpg|png|woff)$/,
          loader: 'url-loader?limit=8192',
          include: constants.SRC_DIR
        }
      ]
    },
    sassLoader: {
      includePaths: [constants.NODE_MODULES_DIR]
    },
    postcss: () => {
      return [
        doiuse({
          browsers: browserSupport,
          onFeatureUsage: usage => console.log(usage.message) // eslint-disable-line
        }),
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

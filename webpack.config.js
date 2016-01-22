import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
  },
  assets: {
    noInfo: true,
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?outputStyle=expanded', 'postcss'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  postcss: () => {
    return [stylelint, reporter({ clearMessages: true }), autoprefixer];
  }
};

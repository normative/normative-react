'use strict';

import WebpackPluginConfig from './webpackPluginConfig';

const plugins = [{
  plugin: 'inert'
}, {
  plugin: './routes/catchAll'
}, {
  plugin: './routes/static'
}];

if (process.env.NODE_ENV === 'development') {
  plugins.push({
    plugin: {
      register: 'hapi-webpack-plugin',
      options: WebpackPluginConfig
    }
  });
}

export default {
  connections: [{
    port: process.env.PORT || 3000,
    labels: ['web']
  }],
  registrations: plugins
};

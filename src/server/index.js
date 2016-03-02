import { Server } from 'hapi';
import inert from 'inert';
import path from 'path';
import Webpack from 'webpack';
import makeWebpackConfig from '../../webpack/makeWebpackConfig';
import webpackPlugin from 'hapi-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const server = new Server();
const webpackConfig = makeWebpackConfig(isDevelopment);
webpackConfig.compiler = new Webpack(webpackConfig);

const hapiPlugins = [inert];

if (isDevelopment) {
  hapiPlugins.push({
    register: webpackPlugin,
    options: webpackConfig
  });
}

server.connection({ port: 3000 });
server.register(hapiPlugins, error => {

  if (error) {
    return console.log(error); // eslint-disable-line
  }

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply.file(path.join(__dirname, '../client/index.html'));
    }
  });

  if (!isDevelopment) {
    server.route({
      method: 'GET',
      path: '/static/{path*}',
      handler: {
        directory: {
          path: path.join(__dirname, '../../dist')
        }
      }
    });
  }

  server.start(() => {
    console.log('Listening at http://localhost:3000'); // eslint-disable-line
  });
});

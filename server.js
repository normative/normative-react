import { Server } from 'hapi';
import inert from 'inert';
import webpackPlugin from 'hapi-webpack-plugin';

import path from 'path';

const server = new Server();

server.connection({ port: 3000 });
server.register([inert, {
  register: webpackPlugin,
  options: './webpack.config.js'
}], error => {
  if (error) {
    return console.log(error); // eslint-disable-line
  }

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply.file(path.join(__dirname, 'index.html'));
    }
  });

  server.start(() => {
    console.log('Listening at http://localhost:3000'); // eslint-disable-line
  });
});

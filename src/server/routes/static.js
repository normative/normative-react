'use strict';

import Path from 'path';

export const register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: (request, reply) => {
      reply.file(Path.join(__dirname, '../../static/favicon.ico'));
    }
  });

  server.route({
    method: 'GET',
    path: '/robots.txt',
    handler: (request, reply) => {
      reply.file(Path.join(__dirname, '../../static/robots.txt'));
    }
  });

  server.route({
    method: 'GET',
    path: '/static/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../../../dist/client')
      }
    }
  });

  next();
};

register.attributes = {
  name: 'static-routes'
};

export default register;

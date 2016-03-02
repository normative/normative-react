'use strict';

import Path from 'path';

exports.register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply.file(Path.join(__dirname, '../../client/index.html'));
    }
  });

  next();
};

exports.register.attributes = {
  name: 'catch-all-routes'
};

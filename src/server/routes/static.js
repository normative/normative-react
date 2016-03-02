'use strict';

import Path from 'path';

exports.register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/static/{path*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../../../dist')
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'static-routes'
};

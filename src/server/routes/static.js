'use strict';

import Path from 'path';

export const register = (server, options, next) => {

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

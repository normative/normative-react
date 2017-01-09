import Path from 'path';

export const register = (server, options, next) => {

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
      reply.file(Path.join(__dirname, '../../client/index.html'));
    }
  });

  next();
};

register.attributes = {
  name: 'catch-all-routes'
};

export default register;

'use strict';

import Glue from 'glue';
import Hoek from 'hoek';
import Manifest from './config/glue-manifest';

Glue.compose(Manifest, { relativeTo: __dirname }, (err, server) => {

  Hoek.assert(!err, err);

  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server started: ${server.info.uri}`);
  });
});

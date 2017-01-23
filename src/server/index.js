'use strict';

import Glue from 'glue';
import Hoek from 'hoek';
import Manifest from './config/glueManifest';

Glue.compose(Manifest, { relativeTo: __dirname }, (err, server) => {

  Hoek.assert(!err, err);

  server.start((startErr) => {
    Hoek.assert(!startErr, startErr);
    console.log(`Server started: http://${server.info.address}:${server.info.port}`); // eslint-disable-line
  });
});

'use strict';

import Glue from 'glue';
import Hoek from 'hoek';
import ip from 'ip';
import Manifest from './config/glueManifest';

Glue.compose(Manifest, { relativeTo: __dirname }, (err, server) => {

  Hoek.assert(!err, err);

  server.start((startErr) => {
    Hoek.assert(!startErr, startErr);
    console.log('\x1b[36m%s\x1b[0m', `Server started locally: http://localhost:${server.info.port}`); // eslint-disable-line
    console.log('\x1b[36m%s\x1b[0m', `Server available externally: http://${ip.address()}:${server.info.port}`); // eslint-disable-line
  });
});

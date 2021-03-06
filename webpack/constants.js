const path = require('path');

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));

const constants = Object.freeze({
  ABSOLUTE_BASE: ABSOLUTE_BASE,
  DIST_DIR: path.join(ABSOLUTE_BASE, 'dist/client'),
  ENTRY_POINT: path.join(ABSOLUTE_BASE, 'src/client/index.jsx'),
  NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, 'node_modules'),
  SRC_DIR: path.join(ABSOLUTE_BASE, 'src')
});

module.exports = constants;

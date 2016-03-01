import fs from 'fs-extra';
import webpack from 'webpack';
import makeWebpackConfig from './makeWebpackConfig';

const webpackConfig = makeWebpackConfig(false);
webpack(webpackConfig, (fatalError, stats) => {
  const jsonStats = stats.toJson();
  const buildError = fatalError || jsonStats.errors[0] || jsonStats.warnings[0];

  if (buildError) {
    console.error(buildError); // eslint-disable-line
  }

  fs.ensureDirSync('./tmp');
  fs.writeFileSync('./tmp/bundle-stats.json', JSON.stringify(jsonStats));
});

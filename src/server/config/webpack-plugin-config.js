import Webpack from 'webpack';
import makeWebpackConfig from '../../../webpack/makeWebpackConfig';

const webpackConfig = makeWebpackConfig(true);

const compiler = new Webpack(webpackConfig);
const assets = webpackConfig.assets;
const hot = {};

export default { compiler, assets, hot };

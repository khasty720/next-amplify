const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

global.navigator = () => null;
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
  require.extensions['.css'] = () => {};
}
module.exports = withCSS(
  withSass(),
);

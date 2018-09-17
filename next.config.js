const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')


module.exports = withPlugins([
  [withImages, {
    /* config for next-optimized-images */
  }],



  // your other plugins here

]);

module.exports = withSass()
module.exports = {
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'my-build-id'
  }
}
module.exports = {
  distDir: 'build'
}
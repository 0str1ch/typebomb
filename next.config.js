const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')

module.exports = withPlugins([
  [withImages, {
    /* config for next-optimized-images */
  }],



  // your other plugins here

]);

module.exports = withSass(withPurgeCss())
module.exports = {
  distDir: 'build'
}
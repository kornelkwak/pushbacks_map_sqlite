// config/plugins.js
module.exports = ({ env }) => ({
    "map-field": {
      enabled: true,
      resolve: './src/plugins/strapi-plugin-map-field'
    },
    'map-plugin': {
      enabled: true,
      resolve: './src/plugins/map-plugin'
    },
  });
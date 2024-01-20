'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('map-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});

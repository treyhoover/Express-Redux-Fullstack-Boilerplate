const config = require('../../config');

module.exports = function entityRoutes(router) {
  router.route('/config')
    .get((req, res) => {
      res.json(config);
    });
};

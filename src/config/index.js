const environment = process.env.NODE_ENV || 'development';

const config = {
  development: {

  },
  production: {

  }
};

module.exports = Object.assign(config[environment], {
  name: 'AppContainer',
  version: '0.0.0',
  port: 3000,
  environment
});
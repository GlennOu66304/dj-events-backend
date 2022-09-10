// Path: ./config/env/production/server.js`
module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  admin: {
    auth: {
      secret: env("jwtSecret"),
    },
  }
});

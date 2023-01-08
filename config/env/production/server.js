// Path: ./config/env/production/server.js`
// module.exports = ({ env }) => ({
//   url: env('MY_HEROKU_URL'),
//   admin: {
//     auth: {
//       secret: env("jwtSecret"),
//     },
//   }
// });
module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
});

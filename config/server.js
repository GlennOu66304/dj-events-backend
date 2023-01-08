module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["testKey1", "testKey2"]),
    // How do I solve "Middleware "strapi::session": App keys are required" error in my deployment of Strapi to Heroku?
    // https://stackoverflow.com/questions/70930881/how-do-i-solve-middleware-strapisession-app-keys-are-required-error-in-my
  },
});

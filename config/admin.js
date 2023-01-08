module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','77b2c87dbab4e1697bec244226fbd1b3'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','d9b0df66ff97a666027e665707b4e3e7'),
  },
});
// Version 4.1.8 Strapi error in build #13126
// https://github.com/strapi/strapi/issues/13126
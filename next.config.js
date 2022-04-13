const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "assets.coingecko.com",
      "assets.axieinfinity.com",
    ],
  },
  env: {
    MONGODB_URI:
      "mongodb+srv://axiearmy:Axie!949@axiearmycluster.4nqg7.mongodb.net/axiearmy?retryWrites=true&w=majority",
    MONGODB_DB: "axiearmy",
    CLOUDINARY_CLOUD_NAME: "axiearmy-club",
    CLOUDINARY_API_KEY: "421476983639982",
    CLOUDINARY_API_SECRET: "lvrJhK2_8T-yqQD-XGUsKWN3204",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "G-TXBCV4CLTZ",
    API_SECRET_KEY: "YXhpZWFybXk6QXhpZSE5NDk=",
    NEXT_DATOCMS_API_TOKEN: "4d1464968c066acddc06b9fd39e61a",
  },
  reactStrictMode: true,
});

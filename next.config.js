const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  api: {
    bodyParser: false,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "assets.coingecko.com",
      "assets.axieinfinity.com",
    ],
  },
  reactStrictMode: true,
});

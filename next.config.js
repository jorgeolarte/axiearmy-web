module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "assets.coingecko.com",
      "assets.axieinfinity.com",
    ],
  },
  env: {
    PROJECT_URL:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://axiearmy-web-g07oro964-jorgeolarte.vercel.app",
    MONGODB_URI:
      "mongodb+srv://axiearmy:Axie!949@axiearmycluster.4nqg7.mongodb.net/axiearmy?retryWrites=true&w=majority",
    MONGODB_DB: "axiearmy",
    CLOUDINARY_CLOUD_NAME: "axiearmy-club",
    CLOUDINARY_API_KEY: "421476983639982",
    CLOUDINARY_API_SECRET: "lvrJhK2_8T-yqQD-XGUsKWN3204",
  },
  reactStrictMode: true,
};

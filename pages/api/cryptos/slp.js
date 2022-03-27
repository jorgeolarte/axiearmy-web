const { getSlpPrice } = require("@/helpers/coingecko");

export default async function handler(req, res) {
  const jsonData = await getSlpPrice();
  res.status(200).json(jsonData);
}

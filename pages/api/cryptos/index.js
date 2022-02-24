const { getCoins } = require("@/lib/coingecko");

export default async function handler(req, res) {
  const jsonData = await getCoins();
  res.status(200).json(jsonData);
}

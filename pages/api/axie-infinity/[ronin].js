const { getAxiesByRonin } = require("@/helpers/axie-infinity.helper");

export default async function handler(req, res) {
  const { ronin } = req.query;
  let axies = await getAxiesByRonin(ronin);
  res.status(200).json(axies);
}

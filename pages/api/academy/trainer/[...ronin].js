const { getStatsByRonin } = require("@/helpers/trainers");

export default async function handler(req, res) {
  const { ronin } = req.query;
  const jsonData = await getStatsByRonin({ ronin: ronin[0], option: ronin[1] });
  res.status(200).json(jsonData);
}

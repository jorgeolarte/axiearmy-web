const { getTrainerByRonin } = require("@/helpers/trainers");

export default async function handler(req, res) {
  const { ronin } = req.query;
  const jsonData = await getTrainerByRonin(ronin);
  res.status(200).json(jsonData);
}

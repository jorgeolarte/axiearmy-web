const { getBestTrainers } = require("@/lib/trainers");

export default async function handler(req, res) {
  const { options } = req.query;
  const jsonData = await getBestTrainers(options[0], parseInt(options[1]));
  res.status(200).json(jsonData);
}

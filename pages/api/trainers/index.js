const { getTrainers } = require("@/lib/trainers");

export default async function handler(req, res) {
  const jsonData = await getTrainers();
  res.status(200).json(jsonData);
}

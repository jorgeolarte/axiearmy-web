const { getComissionsByGoal } = require("@/helpers/trainers");

export default async function handler(req, res) {
  const { slp } = req.query;
  const jsonData = await getComissionsByGoal(parseInt(slp));
  res.status(200).json(jsonData);
}

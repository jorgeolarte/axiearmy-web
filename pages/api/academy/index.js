const { sumAllSLP } = require("@/helpers/trainers");

export default async function handler(req, res) {
  const jsonData = await sumAllSLP();
  res.status(200).json(jsonData);
}

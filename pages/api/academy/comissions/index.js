const { getComissionsTable } = require("@/helpers/trainers");

export default async function handler(req, res) {
  const jsonData = await getComissionsTable();
  res.status(200).json(jsonData);
}

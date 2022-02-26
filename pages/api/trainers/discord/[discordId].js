const { getRoninByDiscord } = require("@/lib/trainers");

export default async function handler(req, res) {
  const { discordId } = req.query;
  const jsonData = await getRoninByDiscord(discordId);
  res.status(200).json(jsonData);
}

import { connectToDatabase } from "./mongodb";

export async function getTrainers() {
  const { db } = await connectToDatabase();

  const trainers = await db
    .collection("trainers")
    .find({ isActive: true })
    .sort({ metacritic: -1 })
    .toArray();

  return trainers;
}

export async function getTrainerByRonin(ronin) {
  const { db } = await connectToDatabase();

  const data = await db.collection("trainers").findOne({ ronin: ronin });

  return JSON.parse(JSON.stringify(data));
}

export async function getBestTrainers(option, limit = 5) {
  const { db } = await connectToDatabase();

  let orderBy = option === "rank" ? 1 : -1;

  const trainers = await db
    .collection("trainers")
    .find({ isActive: true })
    .sort({ [option]: [orderBy] })
    .limit(limit)
    .toArray();

  return trainers;
}

export async function getRoninByDiscord(discordId) {
  const { db } = await connectToDatabase();

  const trainer = await db
    .collection("trainers")
    .findOne({ discordId: discordId });

  return JSON.parse(JSON.stringify(trainer));
}

import { connectToDatabase } from "@/utils/mongo";

export async function getTrainers() {
  const { db } = await connectToDatabase();

  const trainers = await db
    .collection("trainers")
    .find({ isActive: true })
    .sort({ rank: 1, cups: 1 })
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

export async function getStatsByRonin(ronin) {
  const { db } = await connectToDatabase();

  const reports = await db
    .collection("reports")
    .find({ ronin: ronin })
    .toArray();

  return reports;
}

export async function getLastReport(ronin) {
  const { db } = await connectToDatabase();

  const report = await db
    .collection("reports")
    .findOne({ ronin: ronin }, { sort: { $natural: -1 } });

  return JSON.parse(JSON.stringify(report));
}

export async function addDailyReport(report) {
  const { db } = await connectToDatabase();
  await db.collection("tempReports").insertOne(report);
}

export async function sumAllSLP() {
  const { db } = await connectToDatabase();

  let amountSlp = await db
    .collection("trainers")
    .aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: null,
          totalSlp: { $sum: "$slp" },
        },
      },
    ])
    .toArray();

  return amountSlp;
}

export async function getComissionsTable() {
  const { db } = await connectToDatabase();

  const comissions = await db
    .collection("comissions")
    .find({})
    .sort({ goal: -1 })
    .toArray();

  return comissions;
}

export async function getComissionsByGoal(slp) {
  const { db } = await connectToDatabase();

  const comission = await db
    .collection("comissions")
    .find({ goal: { $lte: slp } })
    .toArray();

  return comission[comission.length - 1];
}

export async function getReportsByTrainer({ ronin }) {
  const { db } = await connectToDatabase();

  const reports = await db
    .collection("reports")
    .find({ ronin: ronin })
    .sort({ timestamp: 1 })
    .toArray();

  return reports;
}

export async function updateReport({ ronin, slpToday }) {
  const { db } = await connectToDatabase();
  await db
    .collection("reports")
    .updateOne({ ronin: ronin }, { $set: { slpToday: slpToday } });
}

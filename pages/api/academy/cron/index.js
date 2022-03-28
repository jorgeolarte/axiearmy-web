const {
  getTrainers,
  getLastReport,
  addDailyReport,
} = require("helpers/trainers");
const { getInfoTrainer } = require("@/helpers/lunacia-api");

async function mapTrainer(trainers) {
  if (Object.keys(trainers).length === 0) throw "Imposible to get trainers";

  let stats = trainers.map(insertStats);

  return stats;
}

async function insertStats(trainer) {
  let report = await dailyReport(trainer);

  await addDailyReport(report);
}

async function dailyReport(trainer) {
  let [stats, currentReport] = await Promise.all([
    getStatsTrainer(trainer),
    findLastReport(trainer),
  ]);

  let dailySlp = stats.total_slp - currentReport.slp;

  return {
    ronin: trainer.ronin,
    cups: stats.mmr,
    rank: stats.rank,
    slpToday: dailySlp,
    totalSlp: stats.in_game_slp,
    timestamp: new Date().getTime(),
  };
}

async function getStatsTrainer(trainer) {
  let lunacia = await getInfoTrainer({ ronin: trainer.ronin });

  if (Object.keys(lunacia).length === 0) throw "Unaccess to lunacia api";

  return lunacia;
}

async function findLastReport(trainer) {
  let current = await getLastReport(trainer.ronin);

  if (current === null) throw "Last report not found";

  return current;
}

export default async function handler(req, res) {
  const { authorization } = req.headers;

  try {
    if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
      getTrainers().then(mapTrainer);

      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}

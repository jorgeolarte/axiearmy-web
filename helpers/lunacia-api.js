const URL = "https://game-api.axie.technology";

export async function getInfoTrainer({ ronin }) {
  let trainer = await fetch(`${URL}/api/v1/${ronin}`).then((res) => res.json());

  return trainer;
}

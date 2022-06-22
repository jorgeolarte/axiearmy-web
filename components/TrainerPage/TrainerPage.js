import Trainer from "./Trainer.compound";

export default function TrainerPage({
  name,
  team,
  bio,
  profileFilename,
  ronin,
  rank,
  cups,
  slp,
  city,
  country,
}) {
  const cardStats = [
    {
      type: "Ranking",
      value: rank,
      iconUrl:
        "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/ranking_knuwgi.png",
    },
    {
      type: "Cups",
      value: cups,
      iconUrl:
        "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/elo_znub0t.png",
    },
    {
      type: "SLP",
      value: slp,
      iconUrl:
        "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631884/web/icons/win_rate_f3vpgm.png",
    },
  ];

  return (
    <Trainer>
      <Trainer.Image image={profileFilename} name={name} />
      <Trainer.Info>
        <Trainer.Header>
          <Trainer.Team name={name}>{team}</Trainer.Team>
          <Trainer.Ronin>{ronin}</Trainer.Ronin>
        </Trainer.Header>
        <Trainer.Place city={city} country={country} />
        <Trainer.Bio>{bio}</Trainer.Bio>
      </Trainer.Info>
      <Trainer.Stats>
        {cardStats.map((stats) => (
          <Trainer.Stat
            key={stats.value}
            type={stats.type}
            iconUrl={stats.iconUrl}
          >
            {stats.value}
          </Trainer.Stat>
        ))}
      </Trainer.Stats>
    </Trainer>
  );
}

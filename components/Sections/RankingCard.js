import { useState, useEffect } from "react";
import { Layout, Skeleton } from "@/components/Meta";
import Ranking from "../Compounds/Ranking";

export default function RankingCard() {
  const [trainers, setTrainers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/trainers/rank/rank/3")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setIsLoading(false);
      });
  }, []);

  // if (!trainers) return <NoContent>No hay información del rankin</NoContent>;

  return (
    <Layout type='ranking'>
      {isLoading ? (
        <>
          <Skeleton type='ranking' />
          <Skeleton type='ranking' />
          <Skeleton type='ranking' />
        </>
      ) : (
        <>
          {trainers.map((trainer, index) => (
            <Ranking key={trainer._id} position={index + 1}>
              <Ranking.Image
                url={trainer.profileFilename}
                team={trainer.team}
              />
              <Ranking.Rank>{trainer.rank}</Ranking.Rank>
              <Ranking.Link ronin={trainer.ronin}>{trainer.team}</Ranking.Link>
            </Ranking>
          ))}
        </>
      )}
    </Layout>
  );
}

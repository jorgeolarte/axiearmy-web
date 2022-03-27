import useLayout from "@/hooks/use-layout.hook";
import RankingSkeleton from "./Ranking.skeleton";
import Ranking from "./Ranking.compound";
import useTrainers from "@/hooks/use-trainers.hook";

export default function RankingCard() {
  const { Layout } = useLayout({ type: "ranking" });
  const { isLoading, trainers } = useTrainers();

  return (
    <Layout>
      {isLoading ? (
        <>
          <RankingSkeleton type='ranking' />
          <RankingSkeleton type='ranking' />
          <RankingSkeleton type='ranking' />
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

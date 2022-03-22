import { useState, useEffect } from "react";
import { getTrainerByRonin } from "@/helpers/trainers";
import { ByRank } from "@/components/Stats";

const Ronin = ({ trainer }) => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/trainers/stats/${trainer.ronin}`)
      .then((res) => res.json())
      .then((res) => {
        setStats(res);
        setIsLoading(false);
      });
  }, [trainer]);

  if (isLoading) {
    return <div>cargando stats</div>;
  }

  return (
    <div>
      <h1>
        {trainer.name} | {trainer.team}
      </h1>
      {/* <ByRank /> */}
      {stats.map((stat) => (
        <div key={stat._id}>
          {stat.cups} | {stat.timestamp} |{" "}
          {new Date(stat.timestamp).toLocaleString()}
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const trainer = await getTrainerByRonin(params.ronin);

  return {
    props: {
      trainer,
    },
  };
}

export default Ronin;

import { useState, useEffect } from "react";
import { Loading, NoContent } from "@/components/Meta";
import RankCard from "./RankCard";

export default function Ranking() {
  const [trainers, setTrainers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/trainers/rank/rank/3")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!trainers) return <NoContent>No hay información del rankin</NoContent>;

  return (
    <section
      id='ranking'
      className='container flex flex-col mx-auto mt-10 mb-36'
    >
      <h2 className='text-4xl font-medium mb-16'>Ranking</h2>
      <div className='grid grid-cols-3 grid-flow-row justify-center gap-10 px-10'>
        <RankCard key={trainers[1].ronin} {...trainers[1]} position={2} />
        <RankCard key={trainers[0].ronin} {...trainers[0]} position={1} />
        <RankCard key={trainers[2].ronin} {...trainers[2]} position={3} />
      </div>
    </section>
  );
}

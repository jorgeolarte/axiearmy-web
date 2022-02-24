import { useState, useEffect } from "react";
import TrainerCard from "@/components/Trainers/TrainerCard";
import { Loading, NoContent } from "@/components/Meta";

export default function GridTrainers() {
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!trainers.length) return <NoContent>No hay información</NoContent>;

  return (
    <section
      id='entrenadores'
      className='container flex flex-col mx-auto my-10'
    >
      <h2 className='text-4xl font-medium mb-16'>Entrenadores</h2>
      <div className='container grid grid-flow-col grid-rows-2 auto-cols-max w-screen gap-5 snap-x overflow-x-auto touch-pan-x pb-10'>
        {trainers.map((trainer) => (
          <div key={trainer._id} className='snap-center'>
            <TrainerCard {...trainer} />
          </div>
        ))}
      </div>
    </section>
  );
}

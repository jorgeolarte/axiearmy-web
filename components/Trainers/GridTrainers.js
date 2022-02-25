import { useState, useEffect } from "react";
import TrainerCard from "@/components/Trainers/TrainerCard";
import { NoContent, Skeleton, Layout } from "@/components/Meta";

export default function GridTrainers() {
  const [trainers, setTrainers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data.sort(() => 0.5 - Math.random()));
        setIsLoading(false);
      });
  }, []);

  if (!trainers.length) return <NoContent>No hay información</NoContent>;

  return (
    <Layout type='trainers'>
      {isLoading
        ? [...Array(20).keys()].map((index) => (
            <Skeleton key={index} type='trainer' />
          ))
        : trainers.map((trainer) => (
            <div key={trainer._id} className='snap-center'>
              <TrainerCard {...trainer} />
            </div>
          ))}
    </Layout>
  );
}

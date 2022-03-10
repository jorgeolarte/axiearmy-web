import { useState, useEffect } from "react";
import { Trainer } from "@/components/Compounds/";
import { Skeleton } from "@/components/Meta";

export default function TrainersGrid() {
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

  return (
    <Trainer>
      {isLoading
        ? [...Array(20).keys()].map((index) => (
            <Skeleton key={index} type='trainer' />
          ))
        : trainers.map((trainer) => (
            <Trainer.Item key={trainer._id} ronin={trainer.ronin}>
              <Trainer.Pic url={trainer.profileFilename}>
                {trainer.name}
              </Trainer.Pic>
              <Trainer.Frame>
                <Trainer.Team>{trainer.team}</Trainer.Team>
                <Trainer.Cups>{trainer.cups}</Trainer.Cups>
              </Trainer.Frame>
            </Trainer.Item>
          ))}
    </Trainer>
  );
}

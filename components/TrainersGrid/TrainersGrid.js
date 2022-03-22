import { useState, useEffect } from "react";
import Trainers from "./Trainers.compound";
import TrainerSkeleton from "./Trainer.skeleton";

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
    <Trainers>
      {isLoading
        ? [...Array(20).keys()].map((index) => (
            <TrainerSkeleton key={index} type='trainer' />
          ))
        : trainers.map((trainer) => (
            <Trainers.Item key={trainer._id} ronin={trainer.ronin}>
              <Trainers.Pic url={trainer.profileFilename}>
                {trainer.name}
              </Trainers.Pic>
              <Trainers.Frame>
                <Trainers.Team>{trainer.team}</Trainers.Team>
                <Trainers.Cups>{trainer.cups}</Trainers.Cups>
              </Trainers.Frame>
            </Trainers.Item>
          ))}
    </Trainers>
  );
}

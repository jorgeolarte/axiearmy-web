import { useState, useEffect } from "react";
import Trainers from "./Trainers";
import { Skeleton } from "@/components/Meta";

export default function SectionTrainers() {
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
            <Skeleton key={index} type='trainer' />
          ))
        : trainers.map((trainer) => (
            <Trainers.Trainer key={trainer._id} ronin={trainer.ronin}>
              <Trainers.Pic url={trainer.profileFilename}>
                {trainer.name}
              </Trainers.Pic>
              <Trainers.Frame>
                <Trainers.Team>{trainer.team}</Trainers.Team>
                <Trainers.Cups>{trainer.cups}</Trainers.Cups>
              </Trainers.Frame>
            </Trainers.Trainer>
          ))}
    </Trainers>
  );
}

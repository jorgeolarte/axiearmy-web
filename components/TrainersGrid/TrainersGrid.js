import Trainers from "./Trainers.compound";
import TrainerSkeleton from "./Trainer.skeleton";
import useTrainers from "@/hooks/use-trainers.hook";

export default function TrainersGrid() {
  const { isLoading, trainers } = useTrainers();

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

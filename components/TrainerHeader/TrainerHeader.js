import { useContext } from "react";
import Header from "./Header.compound";
import TrainerContext from "@/contexts/trainer.context";

export default function TrainerHeader() {
  const { trainer } = useContext(TrainerContext);

  return (
    <Header>
      <Header.Back />
      <Header.Trainer>
        <Header.Image picUrl={trainer.profileFilename} alt={trainer.name} />
        <Header.Info>
          <Header.Team>{trainer.team}</Header.Team>
          <Header.Name>{trainer.name}</Header.Name>
        </Header.Info>
      </Header.Trainer>
      <Header.Ronin>
        <div>
          <Header.Title>Ronin Address</Header.Title>
          <Header.Address>{trainer.ronin}</Header.Address>
        </div>
        <Header.Copy alt='Copiar ronin' src='copy.svg' ronin={trainer.ronin} />
      </Header.Ronin>
    </Header>
  );
}

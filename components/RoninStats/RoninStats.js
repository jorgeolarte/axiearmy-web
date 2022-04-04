import { useContext } from "react";
import useComission from "@/hooks/use-comission.hook";
import useGoal from "@/hooks/use-goal.hook";
import useSlpPrice from "@/hooks/use-slpPrice.hook";
import useUsdTotal from "@/hooks/use-usdTotal.hook";
import GridSkeleton from "../AcademyGrid/Grid.skeleton";
import Ronin from "./Ronin.compound";
import TrainerContext from "@/contexts/trainer.context";

export default function RoninStats() {
  const { isLoading, trainer } = useContext(TrainerContext);

  const { slpPrice } = useSlpPrice();
  const { usdTotal } = useUsdTotal({ slp: trainer.slp, slpPrice });
  const { comission } = useComission({ slp: trainer.slp });
  const { goal } = useGoal({ slp: trainer.slp, avg: trainer.avg });

  if (isLoading) {
    return (
      <Ronin>
        {[...Array(8).keys()].map((index) => (
          <GridSkeleton key={index} />
        ))}
      </Ronin>
    );
  }

  return (
    <Ronin>
      {/* SLP acumulado */}
      <Ronin.Item>
        <Ronin.Title>SLP / Acumulado</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {trainer.slp} <Ronin.Type>SLP</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image src='slp.svg' alt='SLP acumulado a la fecha' />
        </Ronin.Body>
      </Ronin.Item>

      {/* AVG */}
      <Ronin.Item>
        <Ronin.Title>SLP / Promedio</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {trainer.avg} <Ronin.Type>SLP</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image src='avg.svg' alt='SLP promedio por día' />
        </Ronin.Body>
      </Ronin.Item>

      {/* Total en usd */}
      <Ronin.Item>
        <Ronin.Title>Total</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {usdTotal} <Ronin.Type>USD</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image src='total.svg' alt='Valor en dolares del SLP' />
        </Ronin.Body>
      </Ronin.Item>

      {/* Goal */}
      <Ronin.Item className='row-span-2'>
        <Ronin.Title>Goal</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {goal} <Ronin.Type>SLP</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image src='goal.svg' alt='Meta a la que podrías llegar' />
        </Ronin.Body>
      </Ronin.Item>

      {/* Ranking */}
      <Ronin.Item>
        <Ronin.Title>Ranking</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>{trainer.rank}</Ronin.Content>
          <Ronin.Image src='ranking.svg' alt='Ranking en el mundo' />
        </Ronin.Body>
      </Ronin.Item>

      {/* Cups */}
      <Ronin.Item>
        <Ronin.Title>Copas</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>{trainer.cups}</Ronin.Content>
          <Ronin.Image src='cups.svg' alt='Copas' />
        </Ronin.Body>
      </Ronin.Item>

      {/* Comission */}
      <Ronin.Item>
        <Ronin.Title>Comisión</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {comission.percent}% <Ronin.Type>{comission.level}</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image src='comission.svg' alt='Comisión' />
        </Ronin.Body>
      </Ronin.Item>
    </Ronin>
  );
}

import useComission from "@/hooks/use-comission.hook";
import useGoal from "@/hooks/use-goal.hook";
import useSlpPrice from "@/hooks/use-slpPrice.hook";
import useTrainer from "@/hooks/use-trainer.hook";
import useUsdTotal from "@/hooks/use-usdTotal.hook";
import Ronin from "./Ronin.compound";

export default function RoninStats({ ronin }) {
  const { isLoading, trainer } = useTrainer({ ronin });
  const { slpPrice } = useSlpPrice();
  const { usdTotal } = useUsdTotal({ slp: trainer.slp, slpPrice });
  const { comission } = useComission({ slp: trainer.slp });
  const { goal } = useGoal({ slp: trainer.slp, avg: trainer.avg });

  if (isLoading) {
    return <div>Cargando...</div>;
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
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>

      {/* AVG */}
      <Ronin.Item>
        <Ronin.Title>SLP / Promedio</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {trainer.avg} <Ronin.Type>SLP</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>

      {/* Total en usd */}
      <Ronin.Item>
        <Ronin.Title>Total</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {usdTotal} <Ronin.Type>USD</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>

      {/* Goal */}
      <Ronin.Item className='row-span-2'>
        <Ronin.Title>Goal</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {goal} <Ronin.Type>SLP</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>

      {/* Ranking */}
      <Ronin.Item>
        <Ronin.Title>Ranking</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>{trainer.rank}</Ronin.Content>
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>

      {/* Cups */}
      <Ronin.Item>
        <Ronin.Title>Copas</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>{trainer.cups}</Ronin.Content>
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>

      {/* Comission */}
      <Ronin.Item>
        <Ronin.Title>Comisión</Ronin.Title>
        <Ronin.Body>
          <Ronin.Content>
            {comission.percent}% <Ronin.Type>{comission.level}</Ronin.Type>
          </Ronin.Content>
          <Ronin.Image />
        </Ronin.Body>
      </Ronin.Item>
    </Ronin>
  );
}

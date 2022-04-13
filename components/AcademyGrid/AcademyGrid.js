import { useState, useEffect } from "react";
import useAcademy from "@/hooks/use-academy.hook";
import AcademyContext from "./Academy.context";
import Grid from "./Grid.compound";
import useSlpPrice from "@/hooks/use-slpPrice.hook";
import GridSkeleton from "./Grid.skeleton";
import useUsdTotal from "@/hooks/use-usdTotal.hook";
import useGoal from "@/hooks/use-goal.hook";

export default function AcademyGrid() {
  // useStates
  const [avg, setAvg] = useState(0);
  const { slpPrice } = useSlpPrice();

  // hooks
  const { amountSLP, leftDays, isLoading } = useAcademy();
  const { usdTotal } = useUsdTotal({ slp: amountSLP, slpPrice });
  const { goal } = useGoal({ slp: amountSLP, avg });

  useEffect(() => {
    function updateAvg() {
      setAvg(Math.round(amountSLP / (15 - leftDays)));
    }

    return updateAvg();
  }, [amountSLP, leftDays]);

  if (isLoading) {
    return (
      <Grid>
        {[...Array(6).keys()].map((index) => (
          <GridSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  return (
    <AcademyContext.Provider
      value={{
        amountSLP,
        leftDays,
      }}
    >
      <Grid>
        {/* SLP acumulado */}
        <Grid.Item>
          <Grid.Title>Acumulado</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {amountSLP} <Grid.Type>SLP</Grid.Type>
            </Grid.Content>
            <Grid.Image src='slp.svg' alt='SLP acumulado a la fecha' />
          </Grid.Body>
        </Grid.Item>

        {/* Avg de SLP hasta el momento */}
        <Grid.Item>
          <Grid.Title>Promedio</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {avg} <Grid.Type>SLP</Grid.Type>
            </Grid.Content>
            <Grid.Image src='avg.svg' alt='Promedio de SLP por día' />
          </Grid.Body>
        </Grid.Item>

        {/* Total SLP */}
        <Grid.Item>
          <Grid.Title>Total</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {usdTotal} <Grid.Type>USD</Grid.Type>
            </Grid.Content>
            <Grid.Image src='total.svg' alt='Valor en dolares del SLP' />
          </Grid.Body>
        </Grid.Item>

        {/* Goal */}
        <Grid.Item className='row-span-2 md:row-auto md:order-last'>
          <Grid.Title>Goal</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {goal} <Grid.Type>SLP</Grid.Type>
            </Grid.Content>
            <Grid.Image src='goal.svg' alt='Meta que podríamos alcanzar' />
          </Grid.Body>
        </Grid.Item>

        {/* Energía */}
        <Grid.Item>
          <Grid.Title>Energía</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {leftDays} / 15 <Grid.Type>días</Grid.Type>
            </Grid.Content>
            <Grid.Image src='energy.svg' alt='Días faltantes para pago' />
          </Grid.Body>
        </Grid.Item>
      </Grid>
    </AcademyContext.Provider>
  );
}

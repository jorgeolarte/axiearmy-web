import { useState, useEffect } from "react";
import useAcademy from "@/hooks/use-academy.hook";
import AcademyContext from "./Academy.context";
import Grid from "./Grid.compound";
import useSlpPrice from "@/hooks/use-slpPrice.hook";
import GridSkeleton from "./Grid.skeleton";
import useUsdTotal from "@/hooks/use-usdTotal.hook";

export default function AcademyGrid() {
  // hooks
  const { amountSLP, leftDays, isLoading } = useAcademy();
  const { slpPrice } = useSlpPrice();
  // useStates
  const [avg, setAvg] = useState(0);
  const { usdTotal } = useUsdTotal({ slp: amountSLP, slpPrice });

  useEffect(() => {
    setAvg(Math.round(amountSLP / (15 - leftDays)));
  }, [amountSLP, leftDays]);

  if (isLoading) {
    return (
      <Grid>
        {[...Array(4).keys()].map((index) => (
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
          <Grid.Title>SLP / Acumulado</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {amountSLP} <Grid.Type>SLP</Grid.Type>
            </Grid.Content>
            <Grid.Image />
          </Grid.Body>
        </Grid.Item>

        {/* Avg de SLP hasta el momento */}
        <Grid.Item>
          <Grid.Title>SLP / Promedio</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {avg} <Grid.Type>SLP</Grid.Type>
            </Grid.Content>
            <Grid.Image />
          </Grid.Body>
        </Grid.Item>

        {/* Total SLP */}
        <Grid.Item>
          <Grid.Title>Total</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {usdTotal} <Grid.Type>USD</Grid.Type>
            </Grid.Content>
            <Grid.Image />
          </Grid.Body>
        </Grid.Item>

        {/* Energía */}
        <Grid.Item>
          <Grid.Title>Energía</Grid.Title>
          <Grid.Body>
            <Grid.Content>
              {leftDays} / 15 <Grid.Type>días</Grid.Type>
            </Grid.Content>
            <Grid.Image />
          </Grid.Body>
        </Grid.Item>
      </Grid>
    </AcademyContext.Provider>
  );
}

import { useState } from "react";
import useCharts from "@/hooks/use-charts.hook";
import StatsContext from "@/contexts/stats.context";
import StatsSLP from "./StatsSLP";
import StatsRank from "./StatsRank";
import Options from "./Options";
import Chart from "./Chart.compound";

export default function ChartStats({ ronin }) {
  const [option, setOption] = useState("default");
  const { isLoading, charts } = useCharts({ ronin, option });

  if (isLoading) {
    return null;
  }

  return (
    <StatsContext.Provider value={{ isLoading, charts, option, setOption }}>
      <Chart>
        <Chart.Title>Estadísticas</Chart.Title>
        <Chart.Options>
          <Options />
        </Chart.Options>
        <Chart.Stats>
          <StatsSLP />
          <StatsRank />
        </Chart.Stats>
      </Chart>
    </StatsContext.Provider>
  );
}

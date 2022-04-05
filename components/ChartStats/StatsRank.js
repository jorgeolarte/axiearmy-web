import { useContext } from "react";
import {
  ComposedChart,
  XAxis,
  Line,
  Tooltip,
  YAxis,
  Legend,
  LineChart,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { formatDate } from "@/utils/date";
import StatsContext from "@/contexts/stats.context";

export default function StatsRank() {
  const { charts } = useContext(StatsContext);

  return (
    <div className='p-5 bg-dark rounded-lg drop-shadow-md w-full'>
      <div className='flex justify-center'>
        <LineChart
          id='_id'
          width={400}
          height={300}
          data={charts}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
          baseVa
        >
          <XAxis
            dataKey='timestamp'
            scale={"auto"}
            tickFormatter={(unixTime) =>
              formatDate(new Date(unixTime), "month")
            }
            axisLine={false}
            name='Días'
            padding={{ left: 20, right: 20 }}
          />
          <YAxis yAxisId={0} axisLine={false} hide={true} />
          <YAxis yAxisId={1} orientation='right' axisLine={false} hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend align='left' verticalAlign='top' />
          <Line
            yAxis={0}
            type='monotone'
            dataKey='cups'
            stroke='#FF4D7C'
            strokeWidth={3}
            dot={{ stroke: "#FF4D7C", strokeWidth: 3 }}
          />
          <Line
            yAxis={1}
            type='monotone'
            dataKey='rank'
            stroke='#EDB914'
            strokeWidth={3}
            dot={{ stroke: "#EDB914", strokeWidth: 3 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

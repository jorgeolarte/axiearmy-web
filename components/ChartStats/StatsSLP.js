import { useContext } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from "recharts";
import CustomTooltip from "./CustomTooltip";
import { formatDate } from "@/utils/date";
import StatsContext from "@/contexts/stats.context";
import CustomLabel from "./CustomLabel";

export default function StatsSLP() {
  const { charts } = useContext(StatsContext);

  return (
    <div className='p-5 bg-dark rounded-lg drop-shadow-md w-full'>
      <div className='flex justify-start'>
        <BarChart
          id='_id'
          width={400}
          height={300}
          data={charts}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
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
          <YAxis axisLine={false} padding={{ top: 20, bottom: 20 }} />
          <Bar
            type='monotone'
            dataKey='slpToday'
            fill='#FF4D7C'
            label={<CustomLabel />}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend align='left' verticalAlign='top' />
        </BarChart>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import useCharts from "@/hooks/use-charts.hook";
import { AreaChart, XAxis, YAxis, Area, Tooltip } from "recharts";

const CustomTick = ({ x, y, payload }) => {
  const [day, setDay] = useState("");

  useEffect(() => {
    setDay(formatDate(new Date(payload.value)));
  }, [payload]);

  function formatDate(date) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/");
  }

  return <g>{day}</g>;
};

const CustomTooltip = ({ active, payload, label }) => {
  const [day, setDay] = useState("");

  useEffect(() => {
    setDay(formatDate(new Date(label)));
  }, [label]);

  function formatDate(date) {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/");
  }

  if (active && payload && payload.length) {
    return (
      <div className='bg-dark text-white rounded-lg drop-shadow-lg py-2 px-4 flex flex-col gap-0'>
        <div className='font-medium'>{day.toLocaleString("co-CO")}</div>
        <div className='font-light text-sm'>
          <span className='text-purple'>$SLP: </span>
          <span>{payload[0].value}</span>
        </div>
      </div>
    );
  }

  return null;
};

export default function Charts({ ronin }) {
  const { isLoading, charts } = useCharts({ ronin });

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("/");
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <AreaChart
        width={500}
        height={300}
        data={charts}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#FF4D7C' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#FF4D7C' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='timestamp'
          scale={"time"}
          tickFormatter={(unixTime) => formatDate(new Date(unixTime))}
          axisLine={false}
          name='Días'
          padding={{ left: 20, right: 20 }}
        />
        <YAxis axisLine={false} padding={{ top: 20, bottom: 20 }} />
        <Area
          type='monotone'
          dataKey='slpToday'
          stroke='#FF4D7C'
          fillOpacity={1}
          fill='url(#colorUv)'
          legendType='circle'
          dot={{ stroke: "white", strokeWidth: 3 }}
        />
        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </div>
  );
}

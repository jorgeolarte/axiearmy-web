import { useState, useEffect } from "react";
import { formatDate } from "@/utils/date";

export default function useFormatDate({ timestamp }) {
  const [monthDate, setMonthDate] = useState("");
  const [yearDate, setYearDate] = useState("");

  useEffect(() => {
    setMonthDate(formatDate(new Date(timestamp), "month"));
    setYearDate(formatDate(new Date(timestamp), "year"));
  }, [timestamp]);

  return { monthDate, yearDate };
}

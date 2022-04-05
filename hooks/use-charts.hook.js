import { useState, useEffect } from "react";

export default function useCharts({ ronin, option }) {
  const [isLoading, setIsLoading] = useState(false);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/academy/trainer/${ronin}/${option}`)
      .then((res) => res.json())
      .then((data) => {
        setCharts(data);
        setIsLoading(false);
      });
  }, [ronin, option]);

  return { isLoading, charts };
}

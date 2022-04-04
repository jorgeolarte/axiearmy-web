import { useState, useEffect } from "react";

export default function useCharts({ ronin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/academy/trainer/${ronin}`)
      .then((res) => res.json())
      .then((data) => {
        setCharts(data);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, charts };
}

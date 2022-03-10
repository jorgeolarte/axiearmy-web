import { useState, useEffect } from "react";
import { getStatsByRonin } from "@/lib/trainers";

export default function ByRank({ ronin }) {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function loadStats() {
      let temp = await getStatsByRonin(ronin);
      setStats(temp);
      setIsLoading(false);
    }

    return loadStats();
  }, [ronin]);

  if (isLoading) {
    return <div>Esta cargando</div>;
  }

  return <div>ByRank</div>;
}

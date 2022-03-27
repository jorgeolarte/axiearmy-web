import { useState, useEffect } from "react";

export default function useUsdTotal({ slp, slpPrice }) {
  const [usdTotal, setUsdTotal] = useState(0);

  useEffect(() => {
    setUsdTotal(Math.round(slp * slpPrice * 100) / 100);
  }, [slp, slpPrice]);

  return { usdTotal };
}

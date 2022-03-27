import { useState, useEffect } from "react";

export default function useSlpPrice() {
  const [slpPrice, setSlpPrice] = useState(0);

  useEffect(() => {
    fetch("/api/cryptos/slp")
      .then((res) => res.json())
      .then((res) => {
        setSlpPrice(res.usd);
      });
  }, []);

  return { slpPrice };
}

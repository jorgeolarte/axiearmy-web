import { useState, useEffect } from "react";

export default function useCryptos() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("api/cryptos")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, coins };
}

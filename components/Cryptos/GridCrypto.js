import { useState, useEffect } from "react";
import { Layout, Skeleton } from "../Meta";
import CryptoItem from "./CryptoItem";

export default function Crypto() {
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

  return (
    <Layout type='cryptos'>
      {isLoading
        ? [...Array(4).keys()].map((index) => (
            <Skeleton key={index} type='crypto' />
          ))
        : coins.map((coin) => <CryptoItem key={coin.id} {...coin} />)}
    </Layout>
  );
}

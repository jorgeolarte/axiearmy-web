import { useState, useEffect } from "react";
import { Layout, Skeleton } from "../Meta";
import Crypto from "./Crypto";

export default function SectionCrypto() {
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
        : coins.map((coin) => (
            <Crypto key={coin.id} symbol={coin.symbol}>
              <Crypto.Container>
                <Crypto.Image image={coin.image} name={coin.name} />
                <Crypto.Body>
                  <Crypto.Name>{coin.name}</Crypto.Name>
                  <Crypto.Price>{coin.current_price}</Crypto.Price>
                  <Crypto.Percent price={coin.price_change_24h} />
                </Crypto.Body>
              </Crypto.Container>
              <Crypto.Footer>{coin.name}</Crypto.Footer>
            </Crypto>
          ))}
    </Layout>
  );
}

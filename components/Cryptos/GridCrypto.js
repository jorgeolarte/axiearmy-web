import { useState, useEffect } from "react";
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

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container mx-auto my-24'>
      <div className='grid grid-cols-4 gap-10'>
        {coins.map((coin) => (
          <CryptoItem key={coin.id} {...coin} />
        ))}
      </div>
    </div>
  );
}

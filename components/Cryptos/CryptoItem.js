import { useState, useEffect } from "react";
import Image from "next/image";

export default function CryptoItem({
  name,
  symbol,
  current_price,
  image,
  price_change_24h,
}) {
  const [color, setColor] = useState(true);

  useEffect(() => {
    function getColor() {
      setColor(evalColor());
    }

    getColor();
  }, []);

  function evalColor() {
    return price_change_24h > 0 ? "text-green" : "text-red";
  }

  return (
    <div>
      <div className='flex gap-5 py-3 p-5 mb-5 bg-dark rounded-xl items-center'>
        <div className='bg-gray p-2 rounded-xl'>
          <Image src={`${image}`} width={32} height={32} alt={`${name}`} />
        </div>
        <div className='flex flex-col'>
          <span className='text-2xl font-medium'>{current_price}</span>
          <span className={`${color}`}>
            {Number(Math.round(price_change_24h + "e4") + "e-4")}%
          </span>
        </div>
      </div>
      <p className='text-center font-medium text-lg'>
        {name} ({symbol.toUpperCase()})
      </p>
    </div>
  );
}

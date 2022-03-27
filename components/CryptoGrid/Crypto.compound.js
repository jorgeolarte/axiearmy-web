import Image from "next/image";

export default function Crypto({ children }) {
  return <div className='flex flex-row gap-3 items-center'>{children}</div>;
}

Crypto.Image = function CryptoImage({ src, alt }) {
  return (
    <div className='p-1 bg-gray rounded-lg flex justify-center items-center'>
      <Image src={src} width={20} height={20} alt={alt} />
    </div>
  );
};

Crypto.Price = function CryptoPrice({ children }) {
  return <div className='text-lg'>{children}</div>;
};

Crypto.Percent = function CryptoPercent({ priceChange }) {
  return (
    <div className={`${priceChange > 0 ? "text-green" : "text-red"}  text-xs`}>
      {Number(Math.round(priceChange + "e4") + "e-4")}%
    </div>
  );
};

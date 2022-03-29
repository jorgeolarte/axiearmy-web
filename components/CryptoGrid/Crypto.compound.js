import Image from "next/image";

export default function Crypto({ children }) {
  return (
    <div className='px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto'>
      {children}
    </div>
  );
}

Crypto.Item = function CryptoItem({ children }) {
  return <div className='flex flex-col justify-between gap-5 '>{children}</div>;
};

Crypto.Container = function CryptoContainer({ children }) {
  return (
    <div className='bg-dark rounded-lg drop-shadow-lg flex flex-row  items-center gap-5 py-3 p-5'>
      {children}
    </div>
  );
};

Crypto.Image = function CryptoImage({ src, alt }) {
  return (
    <div>
      <div className='py-2 px-3 bg-gray rounded-lg flex justify-center items-center'>
        <Image src={src} width={32} height={32} alt={alt} />
      </div>
    </div>
  );
};

Crypto.Content = function CryptoContent({ children }) {
  return <div className='w-1/2'>{children}</div>;
};

Crypto.Price = function CryptoPrice({ children }) {
  return <div className='text-2xl font-medium truncate'>{children}</div>;
};

Crypto.Percent = function CryptoPercent({ priceChange }) {
  return (
    <div className={`${priceChange > 0 ? "text-green" : "text-red"} `}>
      {Number(Math.round(priceChange + "e4") + "e-4")}%
    </div>
  );
};

Crypto.Footer = function CryptoFooter({ children }) {
  return (
    <div className='hidden md:block text-center font-medium text-lg truncate'>
      {children}
    </div>
  );
};

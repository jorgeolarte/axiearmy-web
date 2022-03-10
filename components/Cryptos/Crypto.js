import { useContext, createContext } from "react";
import Image from "next/image";

const SymbolContext = createContext();

export default function Crypto({ children, symbol }) {
  return (
    <SymbolContext.Provider value={{ symbol: symbol }}>
      <div>{children}</div>
    </SymbolContext.Provider>
  );
}

Crypto.Container = function CryptoContainer({ children }) {
  return (
    <div className='flex gap-5 py-3 p-5 mb-5 bg-dark rounded-xl items-center'>
      {children}
    </div>
  );
};

Crypto.Image = function CryptoImage({ image, name }) {
  return (
    <div className='bg-gray p-2 rounded-xl'>
      <Image src={`${image}`} width={32} height={32} alt={`${name}`} />
    </div>
  );
};

Crypto.Body = function CryptoBody({ children }) {
  return <div className='flex flex-col truncate'>{children}</div>;
};

Crypto.Name = function CryptoName({ children }) {
  const { symbol } = useContext(SymbolContext);

  return (
    <span className='block md:hidden font-medium text-lg pb-0'>
      {children} ({symbol.toUpperCase()})
    </span>
  );
};

Crypto.Price = function CryptoPrice({ children }) {
  return <span className='text-2xl font-medium'>{children}</span>;
};

Crypto.Percent = function CryptoPercent({ price }) {
  return (
    <span className={`${price > 0 ? "text-green" : "text-red"}`}>
      {Number(Math.round(price + "e4") + "e-4")}%
    </span>
  );
};

Crypto.Footer = function CryptoFooter({ children }) {
  const { symbol } = useContext(SymbolContext);

  return (
    <p className='hidden md:block text-center font-medium text-lg truncate'>
      {children} ({symbol.toUpperCase()})
    </p>
  );
};

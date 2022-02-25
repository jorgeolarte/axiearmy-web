import Image from "next/image";

export default function CryptoItem({
  name,
  symbol,
  current_price,
  image,
  price_change_24h,
}) {
  return (
    <div>
      <div className='flex gap-5 py-3 p-5 mb-5 bg-dark rounded-xl items-center'>
        <div className='bg-gray p-2 rounded-xl'>
          <Image src={`${image}`} width={32} height={32} alt={`${name}`} />
        </div>
        <div className='flex flex-col truncate'>
          <span className='block md:hidden font-medium text-lg pb-0'>
            {name} ({symbol.toUpperCase()})
          </span>
          <span className='text-2xl font-medium'>{current_price}</span>
          <span
            className={`${price_change_24h > 0 ? "text-green" : "text-red"}`}
          >
            {Number(Math.round(price_change_24h + "e4") + "e-4")}%
          </span>
        </div>
      </div>
      <p className='hidden md:block text-center font-medium text-lg truncate'>
        {name} ({symbol.toUpperCase()})
      </p>
    </div>
  );
}

import useCryptos from "@/hooks/use-cryptos.hook";
import Crypto from "./Crypto.compound";
import CryptoSkeleton from "./Crypto.skeleton";

export default function CryptoGrid() {
  const { isLoading, coins } = useCryptos();

  if (isLoading) {
    return (
      <div className='hidden px-10 md:w-4/5 md:grid md:grid-cols-4 gap-x-10'>
        {[...Array(4).keys()].map((index) => (
          <CryptoSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className='hidden px-10 md:w-4/5 mx-auto md:grid md:grid-cols-4 gap-x-10'>
      {coins.map((coin) => (
        <Crypto key={coin.id}>
          <Crypto.Image src={coin.image} alt={coin.name} />
          <Crypto.Price>{coin.current_price}</Crypto.Price>
          <Crypto.Percent priceChange={coin.price_change_24h} />
        </Crypto>
      ))}
    </div>
  );
}

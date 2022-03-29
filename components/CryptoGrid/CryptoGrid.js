import useCryptos from "@/hooks/use-cryptos.hook";
import Crypto from "./Crypto.compound";
import CryptoSkeleton from "./Crypto.skeleton";

export default function CryptoGrid() {
  const { isLoading, coins } = useCryptos();

  if (isLoading) {
    return (
      <Crypto>
        {[...Array(4).keys()].map((index) => (
          <CryptoSkeleton key={index} />
        ))}
      </Crypto>
    );
  }

  return (
    <Crypto>
      {coins.map((coin) => (
        <Crypto.Item key={coin.id}>
          <Crypto.Container>
            <Crypto.Image src={coin.image} alt={coin.name} />
            <Crypto.Content>
              <Crypto.Price>{coin.current_price}</Crypto.Price>
              <Crypto.Percent priceChange={coin.price_change_24h} />
            </Crypto.Content>
          </Crypto.Container>
          <Crypto.Footer>
            {coin.name} ({coin.symbol.toUpperCase()})
          </Crypto.Footer>
        </Crypto.Item>
      ))}
    </Crypto>
  );
}

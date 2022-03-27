import useLayout from "@/hooks/use-layout.hook";
import CryptoSkeleton from "./Crypto.skeleton";
import Crypto from "./Crypto.compound";
import useCryptos from "@/hooks/use-cryptos.hook";

export default function CryptoCard() {
  const { Layout } = useLayout({ type: "cryptos" });

  const { isLoading, coins } = useCryptos();

  return (
    <Layout>
      {isLoading
        ? [...Array(4).keys()].map((index) => (
            <CryptoSkeleton key={index} type='crypto' />
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

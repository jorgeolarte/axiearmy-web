import { Axies, Ranking, Trainers, Trainer, Cryptos } from "./layouts";

export default function Layout({ type, children }) {
  if (type === "ranking") {
    return <Ranking>{children}</Ranking>;
  } else if (type === "trainers") {
    return <Trainers>{children}</Trainers>;
  } else if (type === "trainer") {
    return <Trainer>{children}</Trainer>;
  } else if (type === "axies") {
    return <Axies>{children}</Axies>;
  } else {
    return <Cryptos>{children}</Cryptos>;
  }
}

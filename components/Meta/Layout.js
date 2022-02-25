import { Ranking, Trainers, Cryptos } from "./layouts";

export default function Layout({ type, children }) {
  if (type === "ranking") {
    return <Ranking>{children}</Ranking>;
  } else if (type === "trainers") {
    return <Trainers>{children}</Trainers>;
  } else {
    return <Cryptos>{children}</Cryptos>;
  }
}

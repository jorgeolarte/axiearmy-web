import { Admin, Axies, Ranking, Trainers, Trainer, Cryptos } from "./types";

export default function Layout({ type, children }) {
  if (type === "ranking") {
    return <Ranking>{children}</Ranking>;
  } else if (type === "trainers") {
    return <Trainers>{children}</Trainers>;
  } else if (type === "trainer") {
    return <Trainer>{children}</Trainer>;
  } else if (type === "axies") {
    return <Axies>{children}</Axies>;
  } else if (type === "admin") {
    return <Admin>{children}</Admin>;
  } else {
    return <Cryptos>{children}</Cryptos>;
  }
}

import { Ranking, Trainer, Crypto, Axie } from "./skeletons/";

export default function Skeleton({ type }) {
  if (type === "ranking") {
    return <Ranking />;
  } else if (type === "trainer") {
    return <Trainer />;
  } else if (type === "axie") {
    return <Axie />;
  } else {
    return <Crypto />;
  }

  return <div>Ninguno</div>;
}

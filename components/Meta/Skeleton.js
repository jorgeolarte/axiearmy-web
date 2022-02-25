import { Ranking, Trainer, Crypto } from "./skeletons/";

export default function Skeleton({ type }) {
  if (type === "ranking") {
    return <Ranking />;
  } else if (type === "trainer") {
    return <Trainer />;
  } else {
    return <Crypto />;
  }

  return <div>Ninguno</div>;
}

import {
  Admin,
  Axies,
  Ranking,
  Trainers,
  Trainer,
  Cryptos,
} from "@/components/Layout";

export default function useLayout({ type }) {
  if (type === "ranking") {
    return { Layout: Ranking };
  } else if (type === "trainers") {
    return { Layout: Trainers };
  } else if (type === "trainer") {
    return { Layout: Trainer };
  } else if (type === "axies") {
    return { Layout: Axies };
  } else if (type === "admin") {
    return { Layout: Admin };
  } else {
    return { Layout: Cryptos };
  }
}

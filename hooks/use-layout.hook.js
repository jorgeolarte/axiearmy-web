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

// export default function Layout({ type, children }) {
//   if (type === "ranking") {
//     return <Ranking>{children}</Ranking>;
//   } else if (type === "trainers") {
//     return <Trainers>{children}</Trainers>;
//   } else if (type === "trainer") {
//     return <Trainer>{children}</Trainer>;
//   } else if (type === "axies") {
//     return <Axies>{children}</Axies>;
//   } else if (type === "admin") {
//     return <Admin>{children}</Admin>;
//   } else {
//     return <Cryptos>{children}</Cryptos>;
//   }
//   }

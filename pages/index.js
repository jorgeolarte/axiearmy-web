import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Header";
import { GridCrypto } from "@/components/Cryptos";
import { GridTrainers } from "@/components/Trainers";
import { AboutUs } from "@/components/About";
import { Ranking } from "@/components/Rank";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Axie Army | Academy</title>
        <meta
          name='description'
          content='Invertimos en videojuegos blockchain. Damos becas a jugadores que quieren hacer realidad sus sueños.'
        />
        <meta name='keywords' content='axie army, axie infinity, axies' />
        <meta name='robots' content='index,follow' />
      </Head>
      <Navbar />
      <Hero />
      <GridCrypto />
      <AboutUs />
      <Ranking />
      <GridTrainers />
      <Footer />
    </>
  );
}

import { Topbar } from "@/components/Navbar";
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
        <meta property='og:site_name' content='Axie Army | Academy' />
        <meta property='og:title' content='Axie Army | Academy' />
        <meta
          property='og:description'
          content='Invertimos en videojuegos blockchain. Damos becas a jugadores que quieren hacer realidad sus sueños.'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='https://res.cloudinary.com/axiearmy-club/image/upload/v1645798265/web/icons/logo-axie-army_ikkmwv.png'
        />
        <meta property='og:type' content='website' />
        <meta property='og:updated_time' content={`${Date.now()}`} />
      </Head>
      <Topbar />
      <Hero />
      <GridCrypto />
      <AboutUs />
      <Ranking />
      <GridTrainers />
      <Footer />
    </>
  );
}

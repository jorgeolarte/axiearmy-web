import Head from "next/head";
import { Topbar } from "@/components/Navbar";
import { Hero } from "@/components/Header";
import { AboutUs } from "@/components/About";
import { CryptoCard, RankingCard, TrainersGrid } from "@/components/Sections";
import { Footer } from "@/components/Footer";

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
          content='https://res.cloudinary.com/axiearmy-club/image/upload/v1645836547/web/icons/favicon_d4sotg.png'
        />
        <meta property='og:type' content='website' />
        <meta property='og:updated_time' content={`${Date.now()}`} />
      </Head>
      <Topbar />
      <Hero />
      <CryptoCard />
      <AboutUs />
      <RankingCard />
      <TrainersGrid />
      <Footer />
    </>
  );
}

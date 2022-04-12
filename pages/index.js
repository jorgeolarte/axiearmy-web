import Head from "next/head";
import { MainBar } from "@/components/Navs";
import { Hero } from "@/components/Header";
import CryptoCard from "@/components/CryptoCard";
import { AboutUs } from "@/components/About";
import TrainersGrid from "@/components/TrainersGrid";
import RankingCard from "@/components/RankingCard";
import { Footer } from "@/components/Footer";
import ModalContext from "@/contexts/modal.context";
import Modal from "@/components/Modal";
import useModal from "@/hooks/use-modal.hook";

export default function Home() {
  const { isOpen, toggleOpen } = useModal();

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
          content='https://axiearmy.club/thumb.jpg'
        />
        <meta
          property='og:image:url'
          itemProp='image'
          content='https://axiearmy.club/thumb.jpg'
        />
        <meta
          property='og:image:secure_url'
          itemProp='image'
          content='https://axiearmy.club/thumb.jpg'
        />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='1080' />
        <meta property='og:type' content='website' />
        <meta property='og:updated_time' content={`${Date.now()}`} />
      </Head>
      <ModalContext.Provider value={{ isOpen, toggleOpen }}>
        <MainBar />
        <Hero />
        <CryptoCard />
        <AboutUs />
        <RankingCard />
        <TrainersGrid />
        <Footer />
        <Modal />
      </ModalContext.Provider>
    </>
  );
}

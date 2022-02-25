import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Navbar";
import { Container } from "@/components/Trainer";
import Head from "next/head";
import { getTrainers, getTrainerByRonin } from "@/lib/trainers";

export default function Ronin({ trainer }) {
  return (
    <>
      <Head>
        <title>{trainer.team} | Axie Army</title>
        <meta
          name='description'
          content={`Conoce a nuestro entrenador ${trainer.name} y equipo de Axie Infinity`}
        />
        <meta name='keywords' content='axie army, axie infinity, axies' />
        <meta name='robots' content='index,follow' />
      </Head>
      <Topbar />
      <Container {...trainer} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  let trainers = await getTrainers();

  return {
    paths: trainers.map((trainer) => `/trainer/${trainer.ronin}`) || [],
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params, preview = false }) {
  let trainer = await getTrainerByRonin(params.ronin);

  return {
    props: {
      preview,
      trainer: { ...trainer },
    },
  };
}

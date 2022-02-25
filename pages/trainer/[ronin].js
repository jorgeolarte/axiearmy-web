import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Navbar";
import { Container } from "@/components/Trainer";
import Head from "next/head";

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
  let response = await fetch(`${process.env.PROJECT_URL}/api/trainers`);
  let trainers = await response.json();

  return {
    paths: trainers.map((trainer) => `/trainer/${trainer.ronin}`) || [],
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params, preview = false }) {
  let response = await fetch(
    `${process.env.PROJECT_URL}/api/trainers/${params.ronin}`
  );
  let trainer = await response.json();

  return {
    props: {
      preview,
      trainer: { ...trainer },
    },
  };
}

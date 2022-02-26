import { Footer } from "@/components/Footer";
import Metatags from "@/components/Meta/Metatags";
import { Topbar } from "@/components/Navbar";
import { Container } from "@/components/Trainer";
import { getTrainers, getTrainerByRonin } from "@/lib/trainers";

export default function Ronin({ trainer }) {
  return (
    <>
      <Metatags
        // title={trainer.name}
        // description={trainer.bio}
        // image={trainer.bio}
        {...trainer}
      />
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
export async function getStaticProps({ params, preview = true }) {
  const trainer = await getTrainerByRonin(params.ronin);

  return {
    props: {
      preview,
      trainer,
    },
  };
}

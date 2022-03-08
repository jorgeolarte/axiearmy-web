import { Footer } from "@/components/Footer";
import Metatags from "@/components/Meta/Metatags";
import { Topbar } from "@/components/Navbar";
import { Container } from "@/components/Trainer";
import { getTrainerByRonin } from "@/lib/trainers";

const Ronin = ({ trainer }) => {
  return (
    <>
      <Metatags {...trainer} />
      <Topbar />
      <Container {...trainer} />
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const trainer = await getTrainerByRonin(params.ronin);

  return {
    props: {
      trainer,
    },
  };
}

export default Ronin;

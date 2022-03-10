import { Footer } from "@/components/Footer";
import Metatags from "@/components/Meta/Metatags";
import { Topbar } from "@/components/Navbar";
import { getTrainerByRonin } from "@/lib/trainers";
import { TrainerPage, AxiesList } from "@/components/Sections";

const Ronin = ({ trainer }) => {
  return (
    <>
      <Metatags {...trainer} />
      <Topbar />
      <TrainerPage {...trainer} />
      <AxiesList ronin={trainer.ronin} />
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

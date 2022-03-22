import { Footer } from "@/components/Footer";
import Metatags from "@/components/Meta/Metatags";
import { MainBar } from "@/components/Navs";
import { getTrainerByRonin } from "@/helpers/trainers";
import TrainerPage from "@/components/TrainerPage";
import AxiesList from "@/components/AxieList";

const Ronin = ({ trainer }) => {
  return (
    <>
      <Metatags {...trainer} />
      <MainBar />
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

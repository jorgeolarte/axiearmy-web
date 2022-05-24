import { Footer } from "@/components/Footer";
import Metatags from "@/components/Meta/Metatags";
import { MainBar } from "@/components/Navs";
import { getTrainerByRonin } from "@/helpers/trainers";
import TrainerPage from "@/components/TrainerPage";
import AxiesList from "@/components/AxieList";
import ModalContext from "@/contexts/modal.context";
import useModal from "@/hooks/use-modal.hook";
import Modal from "@/components/Modal";

const Ronin = ({ trainer }) => {
  const { modal, toggleModal } = useModal();

  return (
    <>
      <Metatags {...trainer} />
      <ModalContext.Provider value={{ modal, toggleModal }}>
        <MainBar />
        <TrainerPage {...trainer} />
        <AxiesList ronin={trainer.ronin} />
        <Footer />
        <Modal />
      </ModalContext.Provider>
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

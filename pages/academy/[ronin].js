import useLayout from "@/hooks/use-layout.hook";
import { getTrainerByRonin } from "@/helpers/trainers";
import RoninStats from "@/components/RoninStats";
import TrainerHeader from "@/components/TrainerHeader";
import TrainerContext from "@/contexts/trainer.context";

const Ronin = ({ trainer }) => {
  const { Layout } = useLayout({ type: "admin" });

  return (
    <TrainerContext.Provider value={{ trainer }}>
      <Layout>
        <TrainerHeader />
        <RoninStats ronin={trainer.ronin} />
      </Layout>
    </TrainerContext.Provider>
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

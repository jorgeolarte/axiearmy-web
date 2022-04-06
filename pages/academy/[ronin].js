import useLayout from "@/hooks/use-layout.hook";
import { getTrainerByRonin } from "@/helpers/trainers";
import RoninStats from "@/components/RoninStats";
import TrainerHeader from "@/components/TrainerHeader";
import TrainerContext from "@/contexts/trainer.context";
import ChartStats from "@/components/ChartStats";
import Metatags from "@/components/Meta/Metatags";

const Ronin = ({ trainer }) => {
  const { Layout } = useLayout({ type: "admin" });

  return (
    <TrainerContext.Provider value={{ trainer }}>
      <Metatags {...trainer} />
      <Layout>
        <TrainerHeader />
        <RoninStats />
        <ChartStats ronin={trainer.ronin} />
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

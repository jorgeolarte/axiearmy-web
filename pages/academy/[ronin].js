import useLayout from "@/hooks/use-layout.hook";
import { getTrainerByRonin } from "@/helpers/trainers";
import RoninStats from "@/components/RoninStats";

const Ronin = ({ trainer }) => {
  const { Layout } = useLayout({ type: "admin" });

  return (
    <Layout>
      <RoninStats ronin={trainer.ronin} />
    </Layout>
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

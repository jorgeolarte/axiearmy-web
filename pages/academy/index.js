import useLayout from "@/hooks/use-layout.hook";
import AcademyGrid from "@/components/AcademyGrid";
import TrainersTable from "@/components/TrainersTable";
import CryptoGrid from "@/components/CryptoGrid";

export default function Index() {
  const { Layout } = useLayout({ type: "admin" });

  return (
    <Layout>
      <AcademyGrid />
      <CryptoGrid />
      <TrainersTable />
    </Layout>
  );
}

import Head from "next/head";
import useLayout from "@/hooks/use-layout.hook";
import AcademyGrid from "@/components/AcademyGrid";
import TrainersTable from "@/components/TrainersTable";
import CryptoGrid from "@/components/CryptoGrid";

export default function Index() {
  const { Layout } = useLayout({ type: "admin" });

  return (
    <>
      <Head>
        <title>Axie Army | Academy</title>
        <meta
          name='description'
          content='Invertimos en videojuegos blockchain. Damos becas a jugadores que quieren hacer realidad sus sueños.'
        />
        <meta name='keywords' content='axie army, axie infinity, axies' />
        <meta name='robots' content='index,follow' />
        <meta property='og:site_name' content='Axie Army | Academy' />
        <meta property='og:title' content='Axie Army | Academy' />
        <meta
          property='og:description'
          content='Invertimos en videojuegos blockchain. Damos becas a jugadores que quieren hacer realidad sus sueños.'
        />
        <meta
          property='og:image'
          itemProp='image'
          content='https://res.cloudinary.com/axiearmy-club/image/upload/v1645836547/web/icons/favicon_d4sotg.png'
        />
        <meta property='og:type' content='website' />
        <meta property='og:updated_time' content={`${Date.now()}`} />
      </Head>
      <Layout>
        <AcademyGrid />
        {/* <CryptoGrid /> */}
        <TrainersTable />
      </Layout>
    </>
  );
}

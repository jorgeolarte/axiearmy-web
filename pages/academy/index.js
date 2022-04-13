import Head from "next/head";
import useLayout from "@/hooks/use-layout.hook";
import AcademyGrid from "@/components/AcademyGrid";
import TrainersTable from "@/components/TrainersTable";

const APP_NAME = "Axie Army | Academy";
const APP_DESCRIPTION =
  "Webapp para el seguimiento de entrenadores de Axie Army";

export default function Index() {
  const { Layout } = useLayout({ type: "admin" });

  return (
    <>
      <Head>
        <title>Axie Army | Academy</title>
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name='keywords' content='axie army, axie infinity, axies' />
        <meta name='robots' content='index,follow' />
        <meta property='og:site_name' content='Axie Army | Academy' />
        <meta property='og:title' content='Axie Army | Academy' />
        <meta property='og:url' content='https://axiearmy.club/academy' />
        <meta
          property='og:description'
          content='Invertimos en videojuegos blockchain. Damos becas a jugadores que quieren hacer realidad sus sueños.'
        />
        <meta property='og:image' content='https://axiearmy.club/thumb.jpg' />
        <meta
          property='og:image:secure_url'
          content='https://axiearmy.club/thumb.jpg'
        />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='1080' />
        <meta property='og:type' content='website' />
        <meta property='og:updated_time' content={`${Date.now()}`} />
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Layout>
        <AcademyGrid />
        {/* <CryptoGrid /> */}
        <TrainersTable />
      </Layout>
    </>
  );
}

import Head from "next/head";
import useCloudinary from "@/hooks/use-cloudinary.hook";

export default function Metatags({ ronin, name, team, bio, profileFilename }) {
  const loader = useCloudinary({
    filename: profileFilename,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  return (
    <Head>
      <title>
        {team} | {name} | Axie Army | Academy
      </title>
      <meta name='description' content={`${bio}`} />
      <meta name='keywords' content='axie army, axie infinity, axies' />
      <meta name='robots' content='index,follow' />
      <meta property='og:site_name' content='Axie Army | Academy ' />
      <meta
        property='og:title'
        content={`${team} | ${name} | Axie Army | Academy`}
      />
      <meta property='og:description' content={`${bio}`} />
      <meta
        property='og:url'
        content={`https://axiearmy.club/trainer/${ronin}`}
      />
      <meta property='og:image' content={`${loader}`} />
      <meta property='og:image:secure_url' content={`${loader}`} />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='og:image:width' content='400' />
      <meta property='og:image:height' content='400' />
      <meta property='og:type' content='website' />
      <meta property='og:updated_time' content={`${Date.now()}`} />
    </Head>
  );
}

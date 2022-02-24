import { useState, useEffect } from "react";
import Image from "next/image";
import useCloudinary from "@/hooks/useCloudinary";
import CardStats from "./CardStats";
import Info from "./Info";

export default function Container({
  name,
  team,
  bio,
  profileFilename,
  ronin,
  rank,
  cups,
  slp,
  city,
  country,
}) {
  const loader = useCloudinary({
    filename: profileFilename,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  const [cardStats, setCardStarts] = useState([]);

  useEffect(() => {
    setCardStarts([
      {
        name: "Ranking",
        value: rank,
        iconUrl:
          "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/ranking_knuwgi.png",
      },
      {
        name: "Cups",
        value: cups,
        iconUrl:
          "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/elo_znub0t.png",
      },
      {
        name: "SLP",
        value: slp,
        iconUrl:
          "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631884/web/icons/win_rate_f3vpgm.png",
      },
    ]);
  }, []);

  return (
    <section
      id='#entrenador'
      className='container flex flex-col mx-auto my-20 gap-12'
    >
      <h1 className='text-4xl text-purple font-medium'>Entrenador</h1>
      <div className='flex flex-row justify-center items-start gap-12'>
        <div className='flex rounded-full border-8 border-purple'>
          <Image
            loader={loader}
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645482088/web/axie-army-logo-redes_c9xjv0.png'
            //   layout='fill'
            width={500}
            height={500}
            alt={name}
            className='rounded-full'
          />
        </div>

        <div className='flex flex-col gap-5'>
          <Info
            team={team}
            name={name}
            bio={bio}
            ronin={ronin}
            city={city}
            country={country}
          />
        </div>

        <div className='flex-grow flex flex-col gap-5'>
          {cardStats.map((stats) => (
            <CardStats
              key={stats.name}
              name={stats.name}
              iconUrl={stats.iconUrl}
            >
              {stats.value}
            </CardStats>
          ))}
        </div>
      </div>
    </section>
  );
}

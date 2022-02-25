import Image from "next/image";
import Link from "next/link";
import useCloudinary from "@/hooks/useCloudinary";

export default function RankCard({
  profileFilename,
  position,
  team,
  rank,
  ronin,
}) {
  const loader = useCloudinary({
    filename: profileFilename,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_300",
    height: "h_300",
  });

  return (
    <div
      className={`${
        position === 1 ? "order-1 md:order-2 md:mt-0" : "order-2 md:mt-10"
      }`}
    >
      <div className='bg-gradient-to-b from-gray to-transparent rounded-xl flex flex-col justify-center items-center gap-5 shadow-xl shadow-dark hover:shadow-inner'>
        <div className='mx-12 mt-8'>
          <div
            className={`relative container flex rounded-full border-8 border-solid ${
              position === 1 ? "border-yellow" : "border-purple"
            }`}
          >
            <Image
              loader={loader}
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645482088/web/axie-army-logo-redes_c9xjv0.png'
              width={300}
              height={300}
              className='rounded-full'
              alt={`${team}`}
            />
            <div
              className={`absolute top-0 left-0 text-4xl ${
                position === 1 ? "bg-yellow" : "bg-purple"
              } rounded-full`}
            >
              <div className='flex justify-center items-center align-middle w-12 h-12'>
                {position}
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row gap-1 justify-center items-center'>
          <span>
            {position === 1 ? (
              <Image
                src={
                  "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/ranking_-_1_pdoga2.png"
                }
                width={30}
                height={30}
                alt={`${rank}`}
              />
            ) : (
              <Image
                src={
                  "https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/Ranking_-_2_-3_rf3ucw.png"
                }
                width={30}
                height={30}
                alt={`${rank}`}
              />
            )}
          </span>
          <span className='text-3xl tracking-wide'>{rank}</span>
        </div>
        <Link href={`/trainer/${ronin}`} passHref>
          <div
            className={`${
              position === 1 ? "bg-yellow" : "bg-purple"
            } rounded-b-xl text-3xl self-stretch text-center p-3 cursor-pointer`}
          >
            <a>{team}</a>
          </div>
        </Link>
      </div>
    </div>
  );
}

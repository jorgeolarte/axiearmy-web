import Image from "next/image";
import Link from "next/link";
import useCloudinary from "@/hooks/useCloudinary";

export default function TrainerCard({
  name,
  profileFilename,
  ronin,
  team,
  cups,
}) {
  const loader = useCloudinary({
    filename: profileFilename,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  return (
    <Link href={`/trainer/${ronin}`} passHref>
      <div className='relative w-48 h-48 cursor-pointer shadow-xl shadow-dark hover:shadow-inner'>
        <a>
          <Image
            loader={loader}
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645482088/web/axie-army-logo-redes_c9xjv0.png'
            layout='fill'
            alt={name}
            className='rounded-xl w-48 h-48'
          />
        </a>

        <div className='w-full h-full hover:bg-purple hover:bg-opacity-80  absolute inset-0 rounded-xl'>
          <div className='opacity-0 hover:opacity-100 flex flex-col h-full justify-center items-center align-middle gap-1'>
            <div className='text-xl tracking-wide'>{team}</div>
            <div className='border-t-2 border-white w-8'> </div>

            <div className='flex flex-row gap-1 justify-center items-center'>
              <Image
                src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/elo_znub0t.png'
                width={20}
                height={20}
                alt={`${cups}`}
              />
              <span className='text-2xl tracking-wide'>{cups}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

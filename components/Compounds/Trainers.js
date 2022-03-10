import Link from "next/link";
import Image from "next/image";
import useCloudinary from "@/hooks/useCloudinary";
import { Layout } from "@/components/Meta";

export default function Trainers({ children, ...restProps }) {
  return <Layout type='trainers'>{children}</Layout>;
}

Trainers.Item = function TrainersItem({ ronin, children }) {
  return (
    <Link href={`/trainer/${ronin}`} passHref>
      <div className='relative w-48 h-48 cursor-pointer shadow-xl shadow-dark hover:shadow-inner'>
        {children}
      </div>
    </Link>
  );
};

Trainers.Frame = function TrainersFrame({ children, ...restProps }) {
  return (
    <div className='w-full h-full hover:bg-purple hover:bg-opacity-80  absolute inset-0 rounded-xl'>
      <div className='opacity-0 hover:opacity-100 flex flex-col h-full justify-center items-center align-middle gap-1'>
        {children}
      </div>
    </div>
  );
};

Trainers.Team = function TrainersTeam({ children, ...restProps }) {
  return (
    <>
      <div className='text-xl tracking-wide'>{children}</div>
      <div className='border-t-2 border-white w-8'> </div>
    </>
  );
};

Trainers.Cups = function TrainersCups({ children, ...restProps }) {
  return (
    <div className='flex flex-row gap-1 justify-center items-center'>
      <Image
        src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/elo_znub0t.png'
        width={20}
        height={20}
        alt={`${children}`}
      />
      <span className='text-2xl tracking-wide'>{children}</span>
    </div>
  );
};

Trainers.Pic = function TrainersPic({ url, children }) {
  const loader = useCloudinary({
    filename: url,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  return (
    <a>
      <Image
        loader={loader}
        src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645482088/web/axie-army-logo-redes_c9xjv0.png'
        layout='fill'
        alt={children}
        className='rounded-xl w-48 h-48'
      />
    </a>
  );
};

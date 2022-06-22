import Image from "next/image";
import useCloudinary from "@/hooks/use-cloudinary.hook";
import useLayout from "@/hooks/use-layout.hook";

export default function Trainer({ children, ...restProps }) {
  const { Layout } = useLayout({ type: "trainer" });

  return <Layout>{children}</Layout>;
}

Trainer.Image = function TrainerImage({ image, name }) {
  console.log("name: ", name);
  console.log("image: ", image);
  const loader = useCloudinary({
    filename: image,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  return (
    <div className='px-5 md:px-0'>
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
    </div>
  );
};

Trainer.Info = function TrainerInfo({ children }) {
  return <div className='md:col-span-2 flex flex-col gap-5'>{children}</div>;
};

Trainer.Header = function TrainerHeader({ children }) {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start gap-10 flex-nowrap'>
      {children}
    </div>
  );
};

Trainer.Team = function TrainerTeam({ name, children }) {
  return (
    <div className='grow text-2xl'>
      <h2 className='font-medium'>{children}</h2>
      <span className='font-light'>{name}</span>
    </div>
  );
};

Trainer.Ronin = function TrainerRonin({ children }) {
  return (
    <div className='w-full md:w-1/3'>
      <div className='flex flex-row justify-end items-center'>
        <div className='font-thin truncate'>
          <p className='text-purple'>Ronin Address</p>
          <p className='truncate'>{children}</p>
        </div>
        <div className=''>
          <a
            onClick={() => {
              navigator.clipboard.writeText(ronin);
            }}
            className='cursor-pointer hover:grayscale'
          >
            <Image
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631882/web/icons/copiar_nemyck.png'
              width={40}
              height={40}
              alt='Copy ronin address'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

Trainer.Place = function TrainerPlace({ country, city }) {
  return (
    <div className='font-thin'>
      <p>{country}</p>
      <p className='text-purple'>{city}</p>
    </div>
  );
};

Trainer.Bio = function TrainerBio({ children }) {
  return (
    <div>
      <p className='font-thin'>{children}</p>
    </div>
  );
};

Trainer.Stats = function TrainerStats({ children }) {
  return (
    <div className='flex shrink-0'>
      <div className='w-full grid grid-cols-2 md:grid-cols-1 gap-5'>
        {children}
      </div>
    </div>
  );
};

Trainer.Stat = function TrainerStat({ type, children, iconUrl }) {
  return (
    <div className='bg-purple hover:bg-yellow rounded-xl py-3 px-5 flex flex-col cursor-default'>
      <div className='flex flex-row justify-between'>
        <div>
          <div className='text-lg font-thin'>{type}</div>
          <div className='text-3xl tracking-wide'>{children}</div>
        </div>
        <div className='row-span-2'>
          <Image
            src={`${iconUrl}`}
            width={30}
            height={30}
            alt={`${children}`}
          />
        </div>
      </div>
    </div>
  );
};

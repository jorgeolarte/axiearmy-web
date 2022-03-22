import Link from "next/link";
import Image from "next/image";
import useLayout from "@/hooks/use-layout.hook";

export default function Axie({ children }) {
  const { Layout } = useLayout({ type: "axies" });

  return <Layout>{children}</Layout>;
}

Axie.Card = function AxieContainer({ children }) {
  return <div className='flex flex-col gap-3'>{children}</div>;
};

Axie.Image = function AxieImage({ id, image, name }) {
  return (
    <Link href={`https://marketplace.axieinfinity.com/axie/${id}/`}>
      <a target={"_blank"} title={`${name}`}>
        <Image src={`${image}`} width={1200} height={900} alt={`${name}`} />
      </a>
    </Link>
  );
};

Axie.Class = function AxieClass({ children }) {
  return <p className='bg-gray rounded-md text-center p-2'>{children}</p>;
};

Axie.Stats = function AxieStats({ children }) {
  return (
    <div className='flex flex-row justify-around items-start gap-5'>
      {children}
    </div>
  );
};

Axie.Stat = function AxieStat({ image, stat }) {
  return (
    <div className='inline-flex gap-2 justify-center items-center'>
      <div className='bg-gray rounded-md py-1 px-2'>
        <Image
          src={`${image}`}
          width={14}
          height={11}
          alt={`${stat}`}
          className='w-5 h-5'
        />
      </div>
      <span className='font-thin'>{stat}</span>
    </div>
  );
};

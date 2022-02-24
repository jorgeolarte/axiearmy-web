import Image from "next/image";

export default function CardStats({ name, children, iconUrl }) {
  return (
    <div className='bg-purple hover:bg-yellow rounded-xl py-3 px-5 flex flex-col cursor-default'>
      <div className='w-40 flex flex-row justify-between'>
        <div>
          <div className='text-lg font-thin'>{name}</div>
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
}

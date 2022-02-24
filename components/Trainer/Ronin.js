import Image from "next/image";

export default function Ronin({ ronin }) {
  return (
    <div className='w-1/3'>
      <div className='flex flex-row justify-end items-center'>
        <div className='font-thin truncate'>
          <p className='text-purple'>Ronin Address</p>
          <p className='truncate'>{ronin}</p>
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
}

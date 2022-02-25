import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className='container my-20 mx-auto md:py-32 md:px-16 grid grid-flow-row md:grid-flow-col relative'>
      <div className='md:w-1/2 bg-gradient-to-b p-12 to-transparent from-gray rounded-xl relative'>
        <div className='absolute -top-10 -right-8 z-10'>
          <Image
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645475987/web/slp_x9fwrc.png'
            width={86}
            height={102}
            alt='Smooth Love Potion'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-5xl'>¿Quieres ser nuestro nuevo entrenador?</h1>
          <Button />
        </div>
      </div>
      <div className='hidden md:block md:absolute md:w-1/2 right-0 inset-y-0'>
        <div className='relative'>
          <Image
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645475263/web/iphone_benw48.png'
            width={613}
            height={514}
            alt='Axie Infiniry'
          />
          <div className='absolute right-0 bottom-10'>
            <Image
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645477447/web/axie-infinity-logo_s78bn3.png'
              width={118}
              height={60}
              alt='Axie Infiniry'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function AxieCard(params) {
  return (
    <div className='flex flex-col gap-3'>
      <Image
        src={`${params.image}`}
        width={1200}
        height={900}
        alt={`${params.children}`}
      />
      <p className='bg-gray rounded-md text-center p-2'>{params.class}</p>
      <div className='flex flex-row justify-around items-start gap-5'>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2'>
            <Image
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/salud_v7odyc.png'
              width={14}
              height={11}
              alt={`${params.stats.hp}`}
              className='w-5 h-5'
            />
          </div>
          <span className='font-thin'>{params.stats.hp}</span>
        </div>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2'>
            <Image
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/velocidad_qkxfsw.png'
              //   layout='responsive'
              width={7}
              height={13}
              alt={`${params.stats.speed}`}
            />
          </div>
          <span className='font-thin'>{params.stats.speed}</span>
        </div>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2'>
            <Image
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/skill_gyakd8.png'
              //   layout='responsive'
              width={13}
              height={13}
              alt={`${params.stats.skill}`}
            />
          </div>
          <span className='font-thin'>{params.stats.skill}</span>
        </div>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2'>
            <Image
              src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645631883/web/icons/mora_xshoqf.png'
              //   layout='responsive'
              width={10}
              height={13}
              alt={`${params.stats.morale}`}
            />
          </div>
          <span className='font-thin'>{params.stats.morale}</span>
        </div>
      </div>
    </div>
  );
}

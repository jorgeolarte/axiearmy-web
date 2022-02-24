import Image from "next/image";

export default function AboutUs() {
  return (
    <section id='quienes-somos' className='container flex mx-auto my-10'>
      <div className='flex bg-gradient-to-b px-20 gap-20 to-transparent from-gray rounded-xl items-center'>
        <div className='w-1/2'>
          <h2 className='text-4xl font-medium mb-10'>¿Quienes somos?</h2>
          <p className='text-lg font-light'>
            Invertimos en videojuegos blockchain. Damos becas a jugadores que
            quieren hacer realidad sus sueños. Porque jugar es un estilo de
            vida.{" "}
            <span className='font-medium underline decoration-purple tracking-wide'>
              #GamingIsALifeStyle
            </span>
          </p>
        </div>
        <div className='w-1/2 text-center'>
          <Image
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645482088/web/axie-army-logo-redes_c9xjv0.png'
            width={1285}
            height={1285}
            alt='Axie Army | Academy'
          />
        </div>
      </div>
    </section>
  );
}

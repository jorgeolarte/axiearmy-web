import Image from "next/image";

export default function AboutUs() {
  return (
    <section id='quienes-somos' className='container flex mx-auto my-10'>
      <div className='flex justify-center items-center flex-col md:flex-row bg-gradient-to-b px-10 md:px-20 gap-5 md:gap-20 to-transparent from-gray rounded-xl'>
        <div className='order-2 md:order-1'>
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
        <div className='text-center order-1 md:order-2 py-10 md:p-10'>
          <Image
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645798265/web/icons/logo-axie-army_ikkmwv.png'
            width={1000}
            height={1000}
            alt='Axie Army | Academy'
          />
        </div>
      </div>
    </section>
  );
}

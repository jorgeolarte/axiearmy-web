import Link from "next/link";

export default function ContactUs() {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-lg'>Contacto</h3>
      <div className='flex flex-col font-thin'>
        <Link href={"mailto:main@axiearmy.club"} passHref>
          <a target={"_blank"} className='hover:text-purple'>
            main@axiearmy.club
          </a>
        </Link>
        <Link href={"https://wa.me/573244005592"} passHref>
          <a target={"_blank"} className='hover:text-purple'>
            +57 324 400 55 92
          </a>
        </Link>
      </div>
    </div>
  );
}

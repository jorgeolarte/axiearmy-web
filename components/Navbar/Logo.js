import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className='flex'>
      <Link href='/'>
        <a>
          <Image
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645797497/web/icons/typo-axie-army_jhq9an.svg'
            width={174}
            height={48}
            alt='Axie Army | Academy'
          />
        </a>
      </Link>
    </div>
  );
}

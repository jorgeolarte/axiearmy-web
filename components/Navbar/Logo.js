import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/'>
      <a>
        <Image
          src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645476626/web/axie-army-logo_wv2hoz.png'
          width={174}
          height={48}
          alt='Axie Army | Academy'
        />
      </a>
    </Link>
  );
}

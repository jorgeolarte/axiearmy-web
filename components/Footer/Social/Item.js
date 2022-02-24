import Image from "next/image";
import Link from "next/link";

export default function Item({ name, iconUrl, link, width, height }) {
  return (
    <Link href={`${link}`} passHref>
      <a className='hover:grayscale' target={"_blank"}>
        <Image
          src={`${iconUrl}`}
          width={width}
          height={height}
          alt={`${name}`}
        />
      </a>
    </Link>
  );
}

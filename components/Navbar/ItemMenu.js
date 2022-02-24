import Link from "next/link";

export default function ItemMenu({ href, children }) {
  return (
    <Link href={`/#${href}`} scroll={false}>
      <a className='font-light hover:text-purple'>{children}</a>
    </Link>
  );
}

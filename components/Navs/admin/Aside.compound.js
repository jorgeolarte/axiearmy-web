import { useContext } from "react";
import ToggleContext from "./toggle.context";
import Link from "next/link";
import Image from "next/image";

export default function Aside({ children }) {
  const { isOpen } = useContext(ToggleContext);

  return (
    <div
      className={`w-52 md:w-56 bg-dark absolute inset-y-0 left-0 transform ${
        !isOpen ? "-translate-x-full" : " md:translate-x-0 "
      }  transition duration-200 ease-in-out z-50 drop-shadow-lg`}
    >
      {children}
    </div>
  );
}

Aside.Nav = function AsideNav({ children }) {
  return (
    <nav className='container bg-gradient-to-b from-gray to-black  flex flex-col gap-5 p-5'>
      {children}
    </nav>
  );
};

Aside.Link = function AsideItem({ href, children }) {
  return (
    <Link href={href} passHref>
      <a>
        <div className='flex flex-row items-center hover:text-purple font-thin gap-3 tracking-wider'>
          {children}
        </div>
      </a>
    </Link>
  );
};

Aside.Close = function AsideClose() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);

  return (
    <div
      className='flex flex-row hover:text-purple font-thin text-2xl gap-3 hover:cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src='/icons/close.svg' width={20} height={20} alt='Cerrar menu' />
    </div>
  );
};

Aside.Image = function AsideImage({ src, alt }) {
  return <Image src={`/icons/${src}`} width={20} height={30} alt={alt} />;
};

Aside.Text = function AsideText({ children }) {
  return <div>{children}</div>;
};

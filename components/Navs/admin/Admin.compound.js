import { useContext } from "react";
import ToggleContext from "./toggle.context";
import Image from "next/image";
import Link from "next/link";

export default function Admin({ children }) {
  return (
    <div className='flex flex-row justify-between items-center p-5 mx-auto'>
      {children}
    </div>
  );
}

Admin.Burger = function AdminBurger() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);

  return (
    <div
      className='cursor-pointer order-last md:order-1'
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image
        src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645833881/web/icons/menu-white_po7rup.png'
        width={25}
        height={25}
        alt='Menu'
      />
    </div>
  );
};

Admin.Logo = function AdminLogo() {
  return (
    <div className='order-first md:order-2'>
      <Link href='/academy' passHref>
        <Image
          src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645797497/web/icons/typo-axie-army_jhq9an.svg'
          width={175}
          height={48}
          alt='Axie Army | Academy'
        />
      </Link>
    </div>
  );
};

Admin.Session = function AdminSession({ children }) {
  return (
    <div className='hidden md:block md:order-3'>
      <div className='py-1 px-3 bg-purple text-white font-light text-sm tracking-wider rounded-lg'>
        {children}
      </div>
    </div>
  );
};

import { useContext, useState, createContext } from "react";
import ModalContext from "@/contexts/modal.context";
import Link from "next/link";
import Image from "next/image";

const ToggleContext = createContext();
const ButtonContext = createContext();

export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <nav className='container mx-auto py-2 flex flex-col md:flex-row justify-between items-stretch md:items-center '>
        {children}
      </nav>
    </ToggleContext.Provider>
  );
}

Navbar.Header = function NavbarHeader({ children }) {
  return (
    <div className='flex flex-row justify-between items-start p-5'>
      {children}
    </div>
  );
};

Navbar.Logo = function NavbarLogo() {
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
};

Navbar.Toggle = function NavbarToggle() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);

  return (
    <button
      className='cursor-pointer md:hidden'
      type='button'
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src='/icons/burger.svg' width={25} height={25} alt='Menu' />
    </button>
  );
};

Navbar.Menu = function NavbarMenu({ children }) {
  const { isOpen } = useContext(ToggleContext);

  return (
    <div
      className={`flex flex-col md:flex-row ${isOpen ? "" : "hidden md:block"}`}
      id='mobile-menu'
    >
      {children}
    </div>
  );
};

Navbar.List = function NavbarList({ children }) {
  return (
    <ul className='flex flex-col md:flex-row justify-between items-center list-none md:gap-12'>
      {children}
    </ul>
  );
};

Navbar.ItemList = function NavbarItemList({ type, children }) {
  return (
    <ButtonContext.Provider value={{ type: type }}>
      <li
        className={`w-full md:w-auto ${
          type === "button" ? "my-2" : "border-b-2 md:border-0"
        } py-2 border-gray text-center md:text-left`}
      >
        {children}
      </li>
    </ButtonContext.Provider>
  );
};

Navbar.Item = function NavbarItem({ href, children }) {
  const { toggleOpen } = useContext(ModalContext);
  const { type } = useContext(ButtonContext);

  if (type === "button") {
    return (
      <a
        href='#'
        rel='noopener noreferrer'
        className='w-min bg-purple rounded px-5 py-1 shadow-xl shadow-dark hover:shadow-inner hover:cursor-pointer'
        onClick={() => toggleOpen()}
      >
        <span className='tracking-wide'>{children}</span>
      </a>
    );
  }

  if (type === "link") {
    return (
      <Link href={`/#`} passHref>
        <a className='block font-light text-selected hover:text-gray'>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/#${href}`} passHref>
      <a className='block font-light  hover:text-purple'>{children}</a>
    </Link>
  );
};

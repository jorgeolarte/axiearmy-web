import { useState } from "react";
import Image from "next/image";
import CallToAction from "./CallToAction";
import ItemMenu from "./ItemMenu";
import ListItem from "./ListItem";
import Logo from "./Logo";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='container mx-auto py-2 flex flex-col md:flex-row justify-between items-stretch md:items-center '>
      <div className='flex flex-row justify-between items-start p-5'>
        <Logo />

        <button
          className='flex cursor-pointer md:hidden p-1 rounded-md border-2 border-white'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645833881/web/icons/menu-white_po7rup.png'
            width={25}
            height={25}
            alt='Menu'
            className='justify-self-center'
          />
        </button>
      </div>
      <div
        className={`flex flex-col md:flex-row ${
          isOpen ? "" : "hidden md:block"
        }`}
        id='mobile-menu'
      >
        <ul className='flex flex-col md:flex-row justify-between items-center list-none md:gap-16'>
          <ListItem>
            <ItemMenu href='quienes-somos'>¿Quienes somos?</ItemMenu>
          </ListItem>
          <ListItem>
            <ItemMenu href='ranking'>Ranking</ItemMenu>
          </ListItem>
          <ListItem>
            <ItemMenu href='entrenadores'>Entrenadores</ItemMenu>
          </ListItem>
          <ListItem type='button'>
            <CallToAction />
          </ListItem>
        </ul>
      </div>
    </nav>
  );
}

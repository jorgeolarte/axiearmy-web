import { useState } from "react";
import CallToAction from "./CallToAction";
import ItemMenu from "./ItemMenu";
import ListItem from "./ListItem";
import Logo from "./Logo";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className='container mx-auto py-2 flex flex-col md:flex-row justify-between items-stretch md:items-center '>
      <div className='flex flex-row justify-between p-5'>
        <Logo />

        <button
          href='#'
          className='inline-block cursor-pointer space-y-2 md:hidden p-2 rounded-md border-2 border-white'
          type='button'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='block w-6 border-t-2 rounded-md border-white'></span>
          <span className='block w-6 border-t-2 rounded-md border-white'></span>
          <span className='block w-6 border-t-2 rounded-md border-white'></span>
        </button>
      </div>
      <div
        className={`${isOpen ? "flex flex-col" : "hidden"}`}
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

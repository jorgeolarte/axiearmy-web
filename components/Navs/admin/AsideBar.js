import { useContext } from "react";
import ToggleContext from "./toggle.context";

export default function AsideBar() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);

  return (
    <div
      className={`w-64 bg-purple absolute inset-y-0 left-0 transform ${
        !isOpen ? "-translate-x-full" : " md:relative  md:translate-x-0 "
      }  transition duration-200 ease-in-out`}
    >
      <nav>
        <a className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          X
        </a>
        <a href='#' className='block'>
          A ningna parte
        </a>
        <a href='#' className='block'>
          A ningna parte
        </a>
        <a href='#' className='block'>
          A ningna parte
        </a>
      </nav>
    </div>
  );
}

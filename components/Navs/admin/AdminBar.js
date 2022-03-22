import { useContext } from "react";
import ToggleContext from "./toggle.context";

export default function AdminBar() {
  const { isOpen, setIsOpen } = useContext(ToggleContext);

  return (
    <div className='bg-yellow flex justify-between z-50'>
      <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        Menu
      </div>
      <div>Logo</div>
      <div>Salir de la app</div>
    </div>
  );
}

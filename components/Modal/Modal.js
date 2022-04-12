import { useContext } from "react";
import ModalContext from "@/contexts/modal.context";

export default function Modal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <div
      id='defaultModal'
      tabIndex={1}
      aria-hidden='true'
      className={`${
        isOpen ? "" : "hidden"
      } overflow-hidden bg-dark bg-opacity-80 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full`}
    >
      <div className='relative flex flex-col justify-center items-center md:h-screen w-auto p-2 md:p-10'>
        <div className='relative w-full md:w-3/4 rounded-lg shadow drop-shadow-lg dark:bg-gray-700 h-screen'>
          <button
            type='button'
            className='absolute right-7 top-4 bg-purple w-10 h-10 rounded-full'
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>

          <iframe
            src='https://tally.so/r/wAk1Dm'
            width='100%'
            height='100%'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
            title='Inscripciones'
            className='rounded-lg'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

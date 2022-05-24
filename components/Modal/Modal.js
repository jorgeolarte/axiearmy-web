import { useContext, useEffect } from "react";
import ModalContext from "@/contexts/modal.context";
import { Inscription, Newsletter } from "./types";

export default function Modal() {
  const { modal, toggleModal } = useContext(ModalContext);

  const selectModal = () => {
    if (modal.type === process.env.MODAL_INSCRIPTION_TYPE) {
      return <Inscription />;
    }
    return <Newsletter />;
  };

  return (
    <div
      id='defaultModal'
      tabIndex={1}
      aria-hidden='true'
      className={`animated ${
        modal.isOpen ? "fadeIn" : "fadeOut hidden "
      } fixed overflow-y-hidden bg-dark bg-opacity-80 top-0 right-0 left-0 z-30 w-full md:inset-0 h-modal h-full`}
    >
      <div className='flex flex-col justify-center items-center md:h-screen w-auto p-2 md:p-10'>
        <div className='relative w-full md:w-3/4 rounded-lg shadow drop-shadow-lg dark:bg-gray-700 h-screen'>
          <button
            type='button'
            className='absolute right-4 top-2 w-10 h-10 rounded-full font-thin text-4xl tracking-widest z-50'
            onClick={() => toggleModal(process.env.MODAL_INSCRIPTION_TYPE)}
          >
            X
          </button>

          {selectModal()}
        </div>
      </div>
    </div>
  );
}

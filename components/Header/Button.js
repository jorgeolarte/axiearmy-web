import { useContext } from "react";
import ModalContext from "@/contexts/modal.context";

export default function Button() {
  const { toggleModal } = useContext(ModalContext);

  return (
    <a
      href='#'
      rel='noopener noreferrer'
      className='w-min bg-purple rounded px-8 py-1 font-light shadow-xl shadow-dark hover:shadow-inner hover:cursor-pointer'
      onClick={() => toggleModal(process.env.MODAL_INSCRIPTION_TYPE)}
    >
      <span className='tracking-wide'>Inscríbete</span>
    </a>
  );
}

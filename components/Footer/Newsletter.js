import { useContext } from "react";
import ModalContext from "@/contexts/modal.context";

export default function Newsletter() {
  const { toggleModal } = useContext(ModalContext);

  return (
    <section className='flex flex-col gap-2'>
      <h3 className='text-lg text-purple'>Newsletter</h3>
      <p className='font-thin'>
        Se el primero en enterarte de nuestros últimos contenidos
      </p>
      <div>
        <a
          href='#'
          className='block bg-purple rounded-lg text-center font-light shadow-xl shadow-dark hover:shadow-none hover:cursor-pointer hover:bg-white hover:text-purple tracking-wide transition delay-75'
          onClick={() => toggleModal(process.env.MODAL_NEWSLETTER_TYPE)}
        >
          Únete
        </a>
      </div>
    </section>
  );
}

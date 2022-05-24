import { useContext } from "react";
import ModalContext from "@/contexts/modal.context";

export default function CTA() {
  const { toggleModal } = useContext(ModalContext);

  return (
    <section className='flex flex-col gap-2'>
      <h3 className='text-lg text-purple'>Reclutamiento</h3>
      <p className='font-thin'>¿Quieres ser nuestro próximo entrenador?</p>
      <div>
        <a
          href='#'
          className='block  border-purple border-2 text-purple text-center rounded-lg font-light shadow-xl shadow-dark hover:shadow-none hover:cursor-pointer hover:border-white hover:text-white tracking-wide transition delay-75'
          onClick={() => toggleModal(process.env.MODAL_INSCRIPTION_TYPE)}
        >
          <span className='tracking-wide'>Inscríbete</span>
        </a>
      </div>
    </section>
  );
}

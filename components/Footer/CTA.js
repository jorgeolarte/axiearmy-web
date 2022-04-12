import { useContext } from "react";
import ModalContext from "@/contexts/modal.context";

export default function CTA() {
  const { toggleOpen } = useContext(ModalContext);

  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-lg'>Se nuestro entrenador</h3>
      <div>
        <a
          href='#'
          className='w-min bg-purple rounded px-8 py-1 font-light shadow-xl shadow-dark hover:shadow-inner hover:cursor-pointer'
          onClick={() => toggleOpen()}
        >
          <span className='tracking-wide'>Inscríbete</span>
        </a>
      </div>
    </div>
  );
}

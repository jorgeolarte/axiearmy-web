import Link from "next/link";

export default function CTA() {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-lg'>Se nuestro entrenador</h3>
      <div>
        <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfyWPUUl2bcN12hIjahGHNyq_LX4R3espI8oNXb3vby9T1pew/viewform?usp=sf_link'>
          <a
            className='w-min bg-purple rounded px-8 py-1 font-light shadow-xl shadow-dark hover:shadow-inner'
            target={"_blank"}
            rel='noopener noreferrer'
          >
            <span className='tracking-wide'>Inscríbete</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

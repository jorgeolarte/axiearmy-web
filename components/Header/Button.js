import Link from "next/link";

export default function Button() {
  return (
    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfyWPUUl2bcN12hIjahGHNyq_LX4R3espI8oNXb3vby9T1pew/viewform?usp=sf_link'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='w-min bg-purple rounded px-8 py-1 font-light shadow-xl shadow-dark hover:shadow-inner'
      >
        <span className='tracking-wide'>Inscríbete</span>
      </a>
    </Link>
  );
}

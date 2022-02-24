import CallToAction from "./CallToAction";
import ItemMenu from "./ItemMenu";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className='container py-5 flex justify-between items-center mx-auto'>
      <Logo />
      <div className='w-auto'>
        <ul className='flex flex-row list-none gap-16'>
          <li>
            <ItemMenu href='quienes-somos'>¿Quienes somos?</ItemMenu>
          </li>
          <li>
            <ItemMenu href='ranking'>Ranking</ItemMenu>
          </li>
          <li>
            <ItemMenu href='entrenadores'>Entrenadores</ItemMenu>
          </li>
          <li>
            <CallToAction />
          </li>
        </ul>
      </div>
    </div>
  );
}

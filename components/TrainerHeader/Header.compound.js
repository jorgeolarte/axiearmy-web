import Link from "next/link";
import Image from "next/image";
import useCloudinary from "@/hooks/use-cloudinary.hook";

export default function Header({ children }) {
  return (
    <div className='px-5 py-2 flex flex-row justify-between bg-black items-center gap-5 sticky top-0 z-10'>
      {children}
    </div>
  );
}

Header.Back = function HeaderBack() {
  return (
    <div>
      <Link href='/academy' passHref>
        <a>{"<"}</a>
      </Link>
    </div>
  );
};

Header.Trainer = function HeaderTrainer({ children }) {
  return (
    <div className='flex-grow'>
      <div className='flex flex-row gap-3 items-center'>{children}</div>
    </div>
  );
};

Header.Image = function HeaderImage({ picUrl, alt }) {
  const loader = useCloudinary({
    filename: picUrl,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  return (
    <div className='flex rounded-full border-4 border-purple'>
      <Image
        loader={loader}
        src='https://res.cloudinary.com/axiearmy-club/image/upload/e_grayscale/v1645631764/web/andres-bueno.jpg'
        width={75}
        height={75}
        alt={alt}
        className='rounded-full'
      />
    </div>
  );
};

Header.Info = function HeaderInfo({ children }) {
  return <div>{children}</div>;
};

Header.Team = function HeaderTeam({ children }) {
  return <h1 className='text-3xl tracking-wide'>{children}</h1>;
};

Header.Name = function HeaderName({ children }) {
  return <span className='font-thin text-sm'>{children}</span>;
};

Header.Ronin = function HeaderRonin({ children }) {
  return (
    <div className='hidden md:block'>
      <div className='flex flex-row justify-between items-center text-xs font-thin gap-5'>
        {children}
      </div>
    </div>
  );
};

Header.Title = function HeaderTitle({ children }) {
  return <h2 className='text-yellow'>{children}</h2>;
};

Header.Address = function HeaderAddress({ children }) {
  return <span className='truncate'>{children}</span>;
};

Header.Copy = function HeaderCopy({ src, alt }) {
  return <Image src={`/icons/${src}`} alt={alt} width={20} height={20} />;
};

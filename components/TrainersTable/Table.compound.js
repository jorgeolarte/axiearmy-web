import React from "react";
import Link from "next/link";
import Image from "next/image";
import useCloudinary from "@/hooks/use-cloudinary.hook";

export default function Table({ children }) {
  return <div className='table w-full relative'>{children}</div>;
}

Table.Head = function TableHead({ children }) {
  return <div className='table-header-group'>{children}</div>;
};

Table.TrHead = function TableTrHead({ children }) {
  return (
    <div className='table-row bg-purple ring-8 ring-black sticky top-0'>
      {children}
    </div>
  );
};

Table.Body = function TableBody({ children }) {
  return <div className='table-row-group'>{children}</div>;
};

Table.Tr = function TableTr({ ronin, children }) {
  return (
    <Link href={`/academy/${ronin}`} passHref>
      <div className='table-row bg-gray first:bg-yellow hover:bg-dark hover:cursor-pointer ring-8 ring-black'>
        {children}
      </div>
    </Link>
  );
};

Table.Td = function TableTd({ children, hidden }) {
  return (
    <span
      className={`${
        hidden ? "hidden md:table-cell" : "table-cell"
      } align-middle p-3 md:p-5`}
    >
      {children}
    </span>
  );
};

Table.Image = function TableImage({ picUrl, name, position }) {
  const loader = useCloudinary({
    filename: picUrl,
    mode: "c_scale",
    effect: "e_grayscale",
    width: "w_200",
    height: "h_200",
  });

  return (
    <div className='table-cell'>
      <div
        className={`flex relative rounded-full border-2 ${
          position === 1 ? "border-yellow" : "border-purple"
        } `}
      >
        <Image
          loader={loader}
          src='https://res.cloudinary.com/axiearmy-club/image/upload/v1645482088/web/axie-army-logo-redes_c9xjv0.png'
          width={50}
          height={50}
          alt={name}
          className='rounded-full'
        />
        <div
          className={`absolute  inset-auto md:-top-1 md:-left-1 rounded-full ${
            position === 1 ? "bg-yellow" : "bg-purple"
          } `}
        >
          <div className='flex justify-center items-center align-middle w-4 h-4 text-xs'>
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

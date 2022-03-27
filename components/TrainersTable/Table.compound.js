import React from "react";
import Link from "next/link";

export default function Table({ children }) {
  return <div className='table w-full md:pt-10'>{children}</div>;
}

Table.Head = function TableHead({ children }) {
  return <div className='table-header-group'>{children}</div>;
};

Table.TrHead = function TableTrHead({ children }) {
  return (
    <div className='table-row bg-purple ring-8 ring-black'>{children}</div>
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
      className={`${hidden ? "hidden md:block" : ""} table-cell p-3 md:p-5`}
    >
      {children}
    </span>
  );
};

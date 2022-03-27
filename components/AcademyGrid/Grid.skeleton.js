import React from "react";

export default function GridSkeleton() {
  return (
    <div className='p-5 bg-dark rounded-lg flex flex-col gap-5 drop-shadow-lg'>
      <div className='w-3/4 border-4 border-gray rounded-lg col-span-2 animate-pulse'></div>
      <div className='flex flex-row justify-between'>
        <div className='w-1/3 h-10 bg-gray rounded-lg animate-pulse'></div>
        <div className='w-10 h-10 bg-gray rounded-full animate-pulse'></div>
      </div>
    </div>
  );
}

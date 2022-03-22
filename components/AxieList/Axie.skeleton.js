export default function AxieSkeleton() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='self-center rounded-full w-28 h-28 my-10 bg-gray'></div>
      <p className='bg-gray rounded-md text-center p-2 animate-pulse h-8'></p>
      <div className='flex flex-row justify-around items-start gap-5'>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2 w-5 h-5 animate-pulse'></div>

          <span className='font-thin text-gray w-5 border-t-4 animate-pulse'></span>
        </div>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2 w-5 h-5 animate-pulse'></div>
          <span className='font-thin text-gray w-5 border-t-4 animate-pulse'></span>
        </div>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2 w-5 h-5 animate-pulse'></div>
          <span className='font-thin text-gray w-5 border-t-4 animate-pulse'></span>
        </div>
        <div className='inline-flex gap-2 justify-center items-center'>
          <div className='bg-gray rounded-md py-1 px-2 w-5 h-5 animate-pulse'></div>
          <span className='font-thin text-gray w-5 border-t-4 animate-pulse'></span>
        </div>
      </div>
    </div>
  );
}

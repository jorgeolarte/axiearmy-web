export default function Crypto() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex gap-5 py-3 p-5 mb-5 bg-dark rounded-xl items-center animate-pulse'>
        <div className='bg-gray p-2 rounded-xl w-10 h-10'></div>
        <div className='flex flex-col gap-2'>
          <span className='rounded-lg border-t-8 border-gray w-24'></span>
          <span className='rounded-lg border-t-4 border-gray w-14'></span>
        </div>
      </div>
      <p className='self-center rounded-lg border-t-8 border-gray w-1/2'></p>
    </div>
  );
}

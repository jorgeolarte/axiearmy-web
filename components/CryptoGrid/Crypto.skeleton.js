export default function CryptoSkeleton() {
  return (
    <div className='flex flex-row gap-3 items-center'>
      <div className='p-1 bg-gray rounded-lg flex justify-center items-center w-5 h-5 animate-pulse'></div>
      <div className=' w-20 border-4 border-gray animate-pulse'></div>
      <div className=' w-10 border-2 border-gray animate-pulse'></div>
    </div>
  );
}

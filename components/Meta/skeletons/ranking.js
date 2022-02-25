export default function Ranking() {
  return (
    <div className='bg-gradient-to-b from-gray to-transparent rounded-xl flex flex-col justify-center items-center gap-5 shadow-xl shadow-dark'>
      <div className='mx-12 mt-8'>
        <div className='animate-pulse relative container flex rounded-full border-8 border-solid border-gray'>
          <div className='animate-pulse p-20 bg-gray rounded-full'></div>
        </div>
      </div>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <span className='p-5 bg-gray rounded-full animate-pulse'></span>
        <span className='border-t-8 border-gray w-20 rounded-lg animate-pulse'></span>
      </div>
      <div className='bg-gray rounded-b-xl text-3xl self-stretch text-center p-3 animate-pulse'>
        <a className='p-3'></a>
      </div>
    </div>
  );
}

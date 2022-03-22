export default function Cryptos({ children }) {
  return (
    <div className='container mx-auto my-24 px-5'>
      <div className='grid md:grid-cols-4 gap-10'>{children}</div>
    </div>
  );
}

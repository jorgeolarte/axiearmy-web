export default function axies({ children }) {
  return (
    <div className='container mx-auto bg-gradient-to-b from-gray to-transparent rounded-xl my-10 py-7 px-10'>
      <h3 className='text-3xl font-medium tracking-wide'>Axies</h3>
      <div className='grid grid-flow-row md:grid-cols-3 gap-20'>{children}</div>
    </div>
  );
}

export default function Ranking({ children }) {
  return (
    <section
      id='ranking'
      className='container flex flex-col mx-auto mt-10 mb-36'
    >
      <h2 className='text-4xl font-medium mb-16'>Ranking</h2>
      <div className='grid md:grid-cols-3 justify-center gap-10 px-10'>
        {children}
      </div>
    </section>
  );
}

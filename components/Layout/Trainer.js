export default function trainer({ children }) {
  return (
    <section
      id='entrenador'
      className='container flex flex-col mx-auto my-10 p-5'
    >
      <h1 className='text-4xl text-purple font-medium mb-16'>Entrenador</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 place-content-between gap-12'>
        {children}
      </div>
    </section>
  );
}

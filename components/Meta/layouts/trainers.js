export default function trainers({ children }) {
  return (
    <section
      id='entrenadores'
      className='container flex flex-col mx-auto my-10'
    >
      <h2 className='text-4xl font-medium mb-16'>Entrenadores</h2>
      <div className='container grid grid-flow-col grid-rows-2 auto-cols-max w-screen gap-5 snap-x overflow-x-auto pb-10'>
        {children}
      </div>
    </section>
  );
}

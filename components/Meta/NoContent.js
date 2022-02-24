export default function NoContent({ children }) {
  return (
    <section className='container flex flex-col mx-auto justify-center items-center my-10'>
      <span className='sr-only'>{children}</span>
    </section>
  );
}

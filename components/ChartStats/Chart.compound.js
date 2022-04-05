export default function Chart({ children }) {
  return (
    <section id='charts' className='flex flex-col mx-auto my-10 p-5 gap-5'>
      {children}
    </section>
  );
}

Chart.Options = function ChartOptions({ children }) {
  return <div className='mb-5'>{children}</div>;
};

Chart.Stats = function ChartStats({ children }) {
  return (
    <div className='flex flex-col md:flex-row gap-10 justify-around items-center'>
      {children}
    </div>
  );
};

Chart.Title = function ChartTitle({ children }) {
  return <h2 className='text-3xl font-medium tracking-wide'>{children}</h2>;
};

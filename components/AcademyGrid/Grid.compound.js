export default function Grid({ children }) {
  return (
    <div className='px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-5 drop-shadow-lg'>
      {children}
    </div>
  );
}

Grid.Item = function GridItem({ children }) {
  return (
    <div className='p-5 bg-dark rounded-lg flex flex-col gap-5'>{children}</div>
  );
};

Grid.Title = function GridTitle({ children }) {
  return (
    <div className='font-light text-xl col-span-2 truncate'>{children}</div>
  );
};

Grid.Body = function GridBody({ children }) {
  return <div className='flex flex-row justify-between'>{children}</div>;
};

Grid.Content = function GridContent({ children }) {
  return (
    <div className='text-3xl text-yellow font-medium tracking-wider'>
      {children}
    </div>
  );
};

Grid.Type = function GridType({ children }) {
  return <span className='text-lg font-light tracking-normal'>{children}</span>;
};

Grid.Image = function GridImage({ children }) {
  return <div>X</div>;
};

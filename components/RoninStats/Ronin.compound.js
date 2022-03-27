export default function Ronin({ children }) {
  return (
    <div className='px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-5 drop-shadow-lg'>
      {children}
    </div>
  );
}

Ronin.Item = function RoninItem({ children, ...props }) {
  return (
    <div
      className={`p-5 bg-dark rounded-lg flex flex-col justify-between gap-5 ${props.className}`}
    >
      {children}
    </div>
  );
};

Ronin.Title = function RoninTitle({ children }) {
  return (
    <div className='font-light text-xl col-span-2 truncate'>{children}</div>
  );
};

Ronin.Body = function RoninBody({ children }) {
  return <div className='flex flex-row justify-between'>{children}</div>;
};

Ronin.Content = function RoninContent({ children }) {
  return (
    <div className='text-3xl text-yellow font-medium tracking-wider'>
      {children}
    </div>
  );
};

Ronin.Type = function RoninType({ children }) {
  return <span className='text-lg font-light tracking-normal'>{children}</span>;
};

Ronin.Image = function RoninImage({ children }) {
  return <div>X</div>;
};

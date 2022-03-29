import Image from "next/image";

export default function Grid({ children }) {
  return (
    <div className='px-5 py-10 grid grid-cols-2 md:grid-cols-5 gap-5 drop-shadow-lg'>
      {children}
    </div>
  );
}

Grid.Item = function GridItem({ children, ...props }) {
  return (
    <div
      className={`p-5 bg-dark rounded-lg flex flex-col justify-between gap-5 ${props.className}`}
    >
      {children}
    </div>
  );
};

Grid.Title = function GridTitle({ children }) {
  return (
    <div className='font-light text-xl col-span-2 truncate'>{children}</div>
  );
};

Grid.Body = function GridBody({ children }) {
  return (
    <div className='flex flex-row justify-between items-end'>{children}</div>
  );
};

Grid.Content = function GridContent({ children }) {
  return (
    <div className='text-3xl text-yellow font-medium tracking-wider truncate'>
      {children}
    </div>
  );
};

Grid.Type = function GridType({ children }) {
  return <span className='text-lg font-light tracking-normal'>{children}</span>;
};

Grid.Image = function GridImage({ src, alt }) {
  return (
    <div>
      <Image src={`/icons/${src}`} width={30} height={30} alt={alt} />
    </div>
  );
};

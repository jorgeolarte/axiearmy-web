export default function Comissions({ children }) {
  return (
    <nav className='container flex flex-col gap-3 px-5 py-10 bg-dark font-light '>
      {children}
    </nav>
  );
}

Comissions.Title = function ComissionsTitle({ children }) {
  return <div className='text-yellow tracking-wider'>{children}</div>;
};

Comissions.Item = function ComissionsItem({ children }) {
  return (
    <div className='flex flex-row justify-between items-center'>{children}</div>
  );
};

Comissions.Level = function ComissionsLevel({ children }) {
  return <div className=''>{children}</div>;
};

Comissions.Goal = function ComissionsGoal({ children }) {
  return <div className='text-yellow'>{children}</div>;
};

Comissions.Percent = function ComissionsPercent({ children, position }) {
  return (
    <div className='text-center'>
      <span
        className={`py-1 px-2 text-center rounded-lg w-auto row-span-2 ${
          position === 1 ? "bg-yellow" : "bg-gray"
        }`}
      >
        {children}
      </span>
    </div>
  );
};

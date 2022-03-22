export default function Admin({ children }) {
  return <div className='relative min-h-screen flex'>{children}</div>;
}

Admin.Main = function AdminMain({ children }) {
  return <div className='flex-1'>{children}</div>;
};

Admin.Container = function AdminContainer({ children }) {
  return <main className='container'>{children}</main>;
};

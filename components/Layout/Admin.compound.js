export default function AdminLayout({ children }) {
  return <div className='relative min-h-screen flex'>{children}</div>;
}

AdminLayout.Main = function AdminLayoutMain({ children }) {
  return <div className='flex-1'>{children}</div>;
};

AdminLayout.Container = function AdminLayoutContainer({ children }) {
  return <main className=''>{children}</main>;
};

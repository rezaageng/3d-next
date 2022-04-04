import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return <div className="w-full h-screen bg-gray-900">{children}</div>;
};

export default Layout;

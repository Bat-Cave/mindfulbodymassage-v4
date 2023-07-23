import Nav from "./Nav";
import Footer from "./Footer";
import type { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="animate-fade-in p-b-8 min-h-[calc(100vh-84px)] scroll-smooth md:min-h-[calc(100vh-204px)]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

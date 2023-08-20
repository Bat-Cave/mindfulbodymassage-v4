import Nav from "./Nav";
import Footer from "./Footer";
import type { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="animate-fade-in p-b-8 relative min-h-screen w-full scroll-smooth">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

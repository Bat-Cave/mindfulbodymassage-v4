import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Nav />
      <div
        vaul-drawer-wrapper="true"
        className="animate-fade-in relative min-h-screen w-full scroll-smooth bg-white pt-[72px]"
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;

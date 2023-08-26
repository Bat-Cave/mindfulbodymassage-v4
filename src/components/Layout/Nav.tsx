// import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import useScrollAmount from "~/utils/hooks/useScrollAmount";

const Nav = () => {
  const scrollAmount = useScrollAmount();
  const solidNav = scrollAmount > 200;

  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 w-full p-1 transition-colors",
        solidNav && "bg-primary"
      )}
    >
      <div
        className={`navbar w-full rounded-md border-2 border-transparent transition-all duration-300`}
      >
        <Link
          href="/"
          className={`items-center justify-center text-xl normal-case text-white`}
        >
          The Mindful Body Massage
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

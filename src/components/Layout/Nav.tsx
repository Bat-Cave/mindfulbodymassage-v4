// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import useScrollAmount from "~/utils/hooks/useScrollAmount";

const Nav = () => {
  const router = useRouter();
  const location = router.pathname;

  const scrollAmount = useScrollAmount();
  const solidNav = scrollAmount > 200 || location !== "/";

  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 w-full p-1 transition-colors",
        solidNav && "bg-primary"
      )}
    >
      <div
        className={`navbar w-full rounded-md border-2 border-transparent px-2 transition-all duration-300 md:px-16`}
      >
        <Link
          href="/"
          className={`hidden shrink-0 items-center justify-center font-gabriela text-xl font-bold normal-case text-white sm:block`}
        >
          The Mindful Body Massage
        </Link>
        <div className="w-full justify-end">
          <Link
            href="/services"
            className={`flex items-center justify-center gap-2 px-1 text-xl normal-case text-white md:px-12`}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M9 18s.9-3.741 3-6M16.186 7.241l.374 3.89c.243 2.523-1.649 4.77-4.172 5.012-2.475.238-4.718-1.571-4.956-4.047a4.503 4.503 0 014.05-4.914l4.147-.4a.51.51 0 01.557.46z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

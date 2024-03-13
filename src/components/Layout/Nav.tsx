import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Logo from "../Logo";

const Nav = () => {
  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 w-full bg-primary p-1 transition-colors"
      )}
    >
      <div
        className={`navbar mx-auto w-full max-w-[1920px] rounded-md border-2 border-transparent px-2 transition-all duration-300 md:px-16`}
      >
        <Logo
          width={36}
          height={36}
          className="strokeWhite h-9 w-9 shrink-0 fill-white text-white sm:mr-2 sm:h-6 sm:w-6"
        />
        <Link
          href="/"
          className={`hidden shrink-0 items-center justify-center font-gabriela text-xl font-bold normal-case text-white sm:block`}
        >
          The Mindful Body Massage
        </Link>
        <div className="flex w-full items-center justify-end gap-2">
          <Link
            href="/services"
            className={`flex items-center justify-center gap-2 px-2 text-base normal-case text-white md:px-8 md:text-xl`}
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

          <Link
            href="/reviews"
            className={`flex items-center justify-center gap-2 px-2 text-base normal-case text-white md:px-8 md:text-xl`}
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
              <g clipPath="url(#clip0_3057_14628)">
                <path
                  d="M9.95242 9.62272L11.5109 6.31816C11.711 5.89395 12.289 5.89395 12.4891 6.31816L14.0476 9.62272L17.5329 10.1559C17.9801 10.2243 18.1583 10.7996 17.8346 11.1296L15.313 13.7001L15.9081 17.3314C15.9845 17.7978 15.5168 18.1534 15.1167 17.9331L12 16.2177L8.88328 17.9331C8.48316 18.1534 8.01545 17.7978 8.09187 17.3314L8.68695 13.7001L6.16545 11.1296C5.8417 10.7996 6.01993 10.2243 6.46711 10.1559L9.95242 9.62272Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22 12L23 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 2V1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 23V22"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 20L19 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 4L19 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 20L5 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 4L5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M1 12L2 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_3057_14628">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            Reviews
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

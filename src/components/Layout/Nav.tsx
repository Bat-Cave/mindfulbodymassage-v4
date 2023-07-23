// import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 p-1 md:p-4">
      <div
        className={`navbar w-full rounded-md border-2 border-transparent bg-primary transition-all duration-300`}
      >
        <div className="navbar-start">
          <div className="dropdown rounded-md">
            <label tabIndex={0} className="btn btn-circle btn-ghost">
              <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M3 5h18M3 12h18M3 19h18"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact menu dropdown-content left-[-8px] mt-6 w-52 gap-1 rounded-md bg-base-100 p-2 shadow"
            >
              {false && (
                <>
                  <li className="rounded-md bg-primary-focus text-primary-content">
                    <Link href="/admin">Admin</Link>
                  </li>
                  <div className="divider mb-[3px] mt-[3px]"></div>
                </>
              )}
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <Link href="/">Portfolio</Link>
              </li>
              <li className="rounded-md bg-primary-focus text-primary-content">
                Use logged in stuff here
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href="/"
            className={`btn btn-ghost hidden items-center justify-center text-xl normal-case text-primary-content md:flex`}
          >
            Mindful Body Massage
          </Link>
          <Link
            href="/"
            className={`btn btn-ghost flex items-center justify-center text-xl normal-case text-primary-content md:hidden`}
          >
            {/* <Image
              className="w-12"
              src="/android-chrome-512x512.png"
              alt="Mindful Body Massage Logo"
            /> */}
            LOGO GOES HERE
          </Link>
        </div>
        <div className="navbar-end gap-5">
          <div
            className="tooltip tooltip-secondary tooltip-bottom"
            data-tip={`Make an appointment`}
          >
            <Link
              href="/new"
              className="btn btn-circle btn-ghost bg-secondary hover:bg-secondary"
            >
              <div className="indicator">
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
          {false && (
            <div
              className="tooltip tooltip-secondary tooltip-bottom"
              data-tip={""}
            >
              <button className="btn btn-circle btn-ghost bg-secondary hover:bg-secondary">
                <div className="indicator">
                  <svg
                    width="24px"
                    height="24px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 100-6 3 3 0 000 6z"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

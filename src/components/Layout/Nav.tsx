"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "../Logo";

const links = [
  { label: "Services", link: "/services" },
  { label: "Reviews", link: "/reviews" },
  { label: "About Us", link: "/about-us" },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState<null | string>(null);
  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 w-full bg-primary p-1 transition-colors"
      )}
    >
      <div
        className={`navbar mx-auto w-full max-w-[1920px] rounded-md border-2 border-transparent px-2 transition-all duration-300 md:px-16`}
      >
        <Link href="/">
          <Logo
            width={36}
            height={36}
            className="strokeWhite h-9 w-9 shrink-0 fill-white text-white sm:mr-2 sm:h-6 sm:w-6"
          />
          <p
            className={`hidden shrink-0 items-center justify-center font-gabriela text-xl font-bold normal-case text-white sm:block`}
          >
            The Mindful Body Massage
          </p>
        </Link>
        <div className="flex w-full items-center justify-end">
          {links.map((link) => (
            <div
              key={link.link}
              className="relative px-2 sm:px-4"
              onMouseEnter={() => setActiveLink(link.link)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link
                href={link.link}
                className={`flex items-center justify-center gap-2 text-base normal-case text-white md:text-lg`}
              >
                {link.label}
              </Link>
              <AnimatePresence>
                {activeLink === link.link && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layout
                    layoutId="nav-link"
                    className="absolute -bottom-[1px] left-2 right-2 top-full bg-white sm:left-4 sm:right-4"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

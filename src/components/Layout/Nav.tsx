"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "iconoir-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "../Logo";
import Button from "../UI/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../UI/drawer";

const links = [
  { label: "Services", link: "/services" },
  { label: "Reviews", link: "/reviews" },
  { label: "Partner", link: "/partner" },
  { label: "About Us", link: "/about-us" },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState<null | string>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 w-full bg-primary transition-colors"
      )}
    >
      <div
        className={`navbar mx-auto w-full max-w-[1920px] rounded-md border-2 border-transparent px-2 transition-all duration-300 lg:px-16`}
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
          <div className="hidden w-full items-center justify-end md:flex">
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
          <div className="flex md:hidden">
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger onClick={() => setDrawerOpen(false)}>
                <Menu className="text-white" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <Button
                      variant="text"
                      onClick={() => {
                        router.push("/");
                        setDrawerOpen(false);
                      }}
                      className="mx-auto flex items-center justify-center gap-2"
                    >
                      <Logo
                        width={36}
                        height={36}
                        className="strokeWhite h-6 w-6 shrink-0 fill-primary text-primary sm:mr-2 sm:h-9 sm:w-9"
                      />
                      <p
                        className={`shrink-0 items-center justify-center font-gabriela text-base font-bold normal-case text-primary sm:block sm:text-xl`}
                      >
                        The Mindful Body Massage
                      </p>
                    </Button>
                  </DrawerTitle>
                </DrawerHeader>
                <div className="flex w-full flex-col items-start gap-2 px-5">
                  {links.map((link) => (
                    <div key={link.link} className="relative px-2 sm:px-4">
                      <Button
                        variant="text"
                        onClick={() => {
                          router.push(link.link);
                          setDrawerOpen(false);
                        }}
                        className={`flex items-center justify-center gap-2 py-1 text-base font-semibold normal-case text-primary underline md:text-lg`}
                      >
                        {link.label}
                      </Button>
                    </div>
                  ))}
                </div>
                <DrawerFooter className="flex-row justify-center">
                  <DrawerClose>
                    <Button size="small" variant="text">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

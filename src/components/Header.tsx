"use client";

import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  const imageMulti = 5;
  return (
    <>
      <div className="mx-auto flex w-full max-w-[1920px] grow list-decimal flex-col items-center bg-white px-3 py-3 text-lg md:px-8 md:py-9 md:text-3xl lg:text-5xl">
        <div className="homemade-apple-regular flex items-center gap-4 text-center md:gap-8">
          <Image
            src={logo.src}
            alt="The Mindful Body Massage Logo"
            width={16 * imageMulti}
            height={19 * imageMulti}
            className="h-12 w-12 shrink-0 md:h-24 md:w-24"
          />
          The Mindful Body Massage
        </div>
      </div>
    </>
  );
}

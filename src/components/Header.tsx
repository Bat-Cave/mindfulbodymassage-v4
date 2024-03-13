"use client";

import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <ol className="mx-auto flex w-full max-w-[1920px] list-decimal flex-col items-center gap-20 bg-white px-8 py-9 text-6xl">
        <li className="dancing-script">
          <Example />
        </li>
        <li className="pacifico-regular">
          <Example />
        </li>
        <li className="satisfy-regular">
          <Example />
        </li>
        <li className="kaushan-script-regular">
          <Example />
        </li>
        <li className="yellowtail-regular">
          <Example />
        </li>
        <li className="homemade-apple-regular">
          <Example />
        </li>
        <li className="parisienne-regular">
          <Example />
        </li>
        <li className="sofia-regular">
          <Example />
        </li>
        <li className="alex-brush-regular">
          <Example />
        </li>
        <li className="marck-script-regular">
          <Example />
        </li>
        <li className="playball-regular">
          <Example />
        </li>
      </ol>
    </>
  );
}

function Example() {
  const imageMulti = 5;
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logo.src}
        alt="The Mindful Body Massage Logo"
        width={16 * imageMulti}
        height={19 * imageMulti}
        className="shrink-0"
      />
      The Mindful Body Massage
    </div>
  );
}

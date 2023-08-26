import Link from "next/link";
import React from "react";
import BooksyWidget from "./BooksyWidget";
import { getRelevantInfo } from "~/utils/booksyInfo";
import { buttonVariants } from "./UI/Button";
import { twMerge } from "tailwind-merge";

const Cta = () => {
  const { phone } = getRelevantInfo();
  return (
    <>
      <section className="mx-auto w-full max-w-7xl py-20 lg:py-[120px]">
        <div
          className={`relative z-10 overflow-hidden bg-primary-content px-3 py-12 sm:px-8 md:p-[70px]`}
        >
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="w-full text-white">
              <span className="mb-2 text-base font-semibold text-primary">
                Relax and Rejuvenate!
              </span>
              <h2 className="mb-2 text-2xl font-bold">
                Treat yourself to a soothing massage experience that will melt
                away stress and tension.
              </h2>
            </div>
            <div className="w-full">
              <div className="flex w-full flex-wrap justify-center gap-4 lg:justify-end lg:space-x-4">
                <Link
                  href={`tel:${phone}`}
                  className={buttonVariants({
                    variant: "outlined",
                    size: "large",
                  })}
                >
                  Contact Us
                </Link>
                <div className="w-full max-w-[300px]">
                  <BooksyWidget />
                  <p className="mt-2 w-full text-center text-xs text-white">
                    Limited slots available.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute left-0 top-0 z-[-1]">
              <svg
                width={189}
                height={162}
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx={16}
                  cy="-16.5"
                  rx={173}
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={-157}
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.07" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <svg
                width={191}
                height={208}
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx={173}
                  cy="178.5"
                  rx={173}
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.07" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;

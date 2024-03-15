"use client";

import Link from "next/link";
import BooksyWidget from "./BooksyWidget";
import { buttonVariants } from "./UI/Button";

const Cta = ({ phone }: { phone: string }) => {
  return (
    <>
      <section className="w-full bg-primary-content lg:mt-[120px]">
        <div
          className={`relative z-10 mx-auto max-w-7xl overflow-hidden px-3 py-12 sm:px-8 md:p-[70px]`}
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
        </div>
      </section>
    </>
  );
};

export default Cta;

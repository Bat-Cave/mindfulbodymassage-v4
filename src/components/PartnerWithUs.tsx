"use client";

import { ArrowRight } from "iconoir-react";
import Link from "next/link";
import { buttonVariants } from "~/components/UI/Button";
import { cn } from "~/lib/utils";

export default function PartnerWithUs() {
  return (
    <section className="w-full bg-primary-content px-4 py-24 text-white md:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center space-y-6">
        <h3 className="text-center font-gabriela text-4xl font-bold">
          Partner with Us
        </h3>
        <p className="max-w-2xl text-left text-lg font-semibold md:text-center">
          Elevate your business with the transformative benefits of massage.
          Partner with us to gain a competitive edge, with featured promotion on
          our website and access to a clientele seeking wellness and relaxation.
        </p>
        <Link
          href="/partner"
          className={cn(
            buttonVariants({
              variant: "outlined",
              size: "large",
            }),
            "flex items-center gap-3 font-medium"
          )}
        >
          Become a partner <ArrowRight strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}

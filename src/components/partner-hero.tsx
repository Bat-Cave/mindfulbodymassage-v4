"use client";

import Link from "next/link";
import PageSection from "./PageSection";
import PageTitle from "./PageTitle";
import { buttonVariants } from "./UI/Button";
import { cn } from "~/lib/utils";

const PartnerHero = () => {
  return (
    <>
      <PageTitle>Partner with The Mindful Body Massage!</PageTitle>
      <PageSection className="px-4 text-lg md:px-6">
        <p className="mb-4">
          Massage can be a great addition to your business. The benefits of
          massage to mental and physical well being are immeasurable. Whether
          you want to incorporate massage for the benefit of your clients or
          employees, I can guarantee it will be an addition to your business
          that will give you a positive edge above the rest. When you partner
          with The Mindful Body Massage, I will feature your business on my
          website and be sure to promote your business to my clients.
        </p>
        <Link
          href="#partner-with-us"
          className={cn(buttonVariants({ variant: "solid" }), "mx-auto")}
        >
          Partner With Us!
        </Link>
      </PageSection>
    </>
  );
};

export default PartnerHero;

"use client";

import { SendMail } from "iconoir-react";
import PageSection from "./PageSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAutoPlay from "~/utils/hooks/useAutoPlay";

const mailtoLink =
  "mailto:nicole@themindfulbodymassage.com?subject=I%20want%20to%20partner%20with%20The%20Mindful%20Body%20Massage!";

const perks = [
  "to show my employees my appreciation for them through massage.",
  "to collaborate to offer joint services.",
  "to feature my business on themindfulbodymassage.com.",
];

const PartnerEmail = () => {
  const [index, setIndex] = useState(0);
  useAutoPlay(
    () => setIndex((curr) => (curr + 1 >= perks.length ? 0 : curr + 1)),
    { interval: 3500 }
  );

  return (
    <PageSection
      id="partner-with-us"
      className="max-w-none bg-primary  pb-24 text-white"
    >
      <div className="mx-auto w-full max-w-3xl px-4 py-16">
        <h3 className="mb-3 text-3xl">Partner with Us!</h3>
        <p>
          Interested in adding Massage as a perk in your business?{" "}
          <a
            className="underline"
            href={mailtoLink}
            target="_blank"
            rel="noopener"
          >
            Send us an email
          </a>{" "}
          to inquire about how partnering works and how we can tailor our
          services to your specific needs! Whether you want to show your
          employees your appreciation for them through massage, or you want to
          collaborate to offer joint services, The Mindful Body Massage is ready
          to meet your needs and excited to work with you!
        </p>
      </div>
      <div className="mockup-window mx-auto max-w-2xl border-2 border-neutral bg-neutral/80">
        <div className="relative bg-white text-primary-content">
          <div className="flex items-center gap-2 border-b border-neutral px-4">
            <span className="w-[48px] border-r border-neutral py-2 pr-2 text-right text-xs text-neutral/80 md:w-[64px] md:py-1 md:text-sm">
              To:
            </span>
            <span className="truncate text-ellipsis">
              <a
                className="text-primary underline"
                href={mailtoLink}
                target="_blank"
                rel="noopener"
              >
                nicole@themindfulbodymassage.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2 border-b border-neutral px-4">
            <span className="w-[48px] border-r border-neutral py-2 pr-2 text-right text-xs text-neutral/80 md:w-[64px] md:py-1 md:text-sm">
              Subject:
            </span>
            <span className="truncate text-ellipsis">
              I want to partner with The Mindful Body Massage!
            </span>
          </div>
          <div className="min-h-[160px] px-4 pb-16 pt-2">
            <p className="mb-4">Hello!</p>
            <p>
              I want{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 100, scale: 0.5, opacity: 0 }}
                  animate={{ y: 100, scale: 1, opacity: 1 }}
                  exit={{ y: -100, scale: 0.5, opacity: 0 }}
                >
                  {perks[index]}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>
          <a
            className="absolute bottom-2 right-2 flex gap-2 rounded-lg bg-primary px-3 py-1 text-white"
            href={mailtoLink}
            target="_blank"
            rel="noopener"
          >
            Send
            <SendMail />
            <span className="sr-only">Send us an email</span>
          </a>
        </div>
      </div>
    </PageSection>
  );
};

export default PartnerEmail;

"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import heroImageMobile from "../assets/home-hero-mobile.jpg";
import heroImage from "../assets/home-hero.jpg";
import logo from "../assets/logo.png";

import { motion } from "framer-motion";
export default function Hero() {
  const imageMultiplier = 5;

  return (
    <>
      <div className="mx-auto hidden w-full max-w-[1920px] md:block">
        <AspectRatio.Root
          ratio={1920 / 720}
          className="relative flex items-center justify-end bg-cover px-9"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className="w-1/2 text-center text-primary-content"
          >
            <div className="flex flex-col items-center rounded-3xl py-4 md:py-12">
              <h1 className="mb-5 text-left font-gabriela text-3xl font-bold sm:text-center lg:text-6xl">
                Welcome to Healing
              </h1>
              <h2 className="my-auto mb-5 max-w-lg text-left text-lg font-semibold sm:text-center lg:text-2xl">
                A place where the power of massage is combined with other
                alternative healing modalities to give you the best experience
                in your healing journey.
              </h2>
            </div>
          </motion.div>
          <Image
            className="absolute bottom-4 right-4"
            src={logo.src}
            alt="The Mindful Body Massage Logo"
            width={16 * imageMultiplier}
            height={19 * imageMultiplier}
          />
        </AspectRatio.Root>
      </div>
      <div className="flex overflow-hidden md:hidden">
        <div
          className="relative flex h-[80vh] w-full grow items-start justify-center bg-cover bg-bottom px-8 py-6"
          style={{ backgroundImage: `url(${heroImageMobile.src})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className="w-full text-center text-primary-content"
          >
            <div className="flex flex-col items-center rounded-3xl py-4 md:py-12">
              <h1 className="mb-5 text-center font-gabriela text-4xl font-bold sm:text-center lg:text-6xl">
                Welcome to Healing
              </h1>
              <h2 className="my-auto mb-5 max-w-lg text-center text-lg font-semibold sm:text-center lg:text-2xl">
                A place where the power of massage is combined with other
                alternative healing modalities to give you the best experience
                in your healing journey.
              </h2>
            </div>
          </motion.div>
          <Image
            className="absolute bottom-4 right-4"
            src={logo.src}
            alt="The Mindful Body Massage Logo"
            width={16 * imageMultiplier}
            height={19 * imageMultiplier}
          />
        </div>
      </div>
    </>
  );
}

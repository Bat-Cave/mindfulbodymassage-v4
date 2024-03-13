"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "~/components/UI/Button";
import logoTransparent from "../assets/logo-transparent.png";
export default function Services() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-16 bg-white px-5 py-24 text-primary-content md:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, margin: "-20%" }}
        className="w-full max-w-[250px]"
      >
        <Image
          src={logoTransparent}
          alt="The Mindful Body Massage logo"
          width={250}
          className=""
        />
      </motion.div>
      <div className="w-full">
        <h2 className="sr-only mb-6 hidden text-center font-gabriela text-4xl font-bold">
          Services
        </h2>
        <p className="text-base">
          At The Mindful Body Massage, our diverse range of massage therapies
          are expertly designed to cater to your specific needs. Whether you
          seek relaxation, stress relief, pain reduction, or prenatal care, we
          are dedicated to providing you with tailored treatments that promotes
          overall well-being. Experience improved circulation, relief from
          muscle tension, enhanced relaxation, and a rejuvenated sense of self.
          Trust us to deliver the therapeutic benefits you deserve.
        </p>
        <div className="my-6 flex flex-col items-center justify-center">
          <Button href="/services">Our Services</Button>
          <p className="mt-1 text-center text-base font-semibold">
            Massages starting at $35
          </p>
        </div>
      </div>
    </section>
  );
}

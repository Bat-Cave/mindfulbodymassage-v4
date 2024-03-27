"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "~/lib/utils";

const PageSection = ({
  children,
  className,
  ...props
}: HTMLMotionProps<"section">) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.1 }}
      className={cn(
        "mx-auto w-full max-w-3xl scroll-m-20 px-4 font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default PageSection;

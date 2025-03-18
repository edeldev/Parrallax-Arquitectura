"use client";
import { CTA } from "@/app/components/ui/CTA";
import { motion } from "framer-motion";

export const RightContent = () => {
  return (
    <motion.div
      className="absolute top-[10rem] right-0 text-white w-[400px] hidden xl:flex flex-col gap-1 ps-20"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h3 className="font-bold leading-[.90rem]">
        Top 10 architecture <br /> companies
      </h3>
      <div className="self-center mt-5">
        <CTA
          bgColor="bg-primary"
          bgSecondary="bg-secondary"
          paddingX="px-3"
          paddingY="py-[.4rem]"
          title="Contact us"
          colorTitle="text-white"
          rotateIcon="rotate-45"
        />
      </div>
    </motion.div>
  );
};

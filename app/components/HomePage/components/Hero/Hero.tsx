"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { LeftContent, RightContent } from "./components";

export const Hero = () => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <main
      id="homePage"
      className="min-h-[calc(100vh-120px)] mt-[120px] flex flex-col justify-end items-center scroll-mt-[120px]"
    >
      <div className="relative w-full flex justify-center">
        <motion.img
          src="/images/modelo-mansion.webp"
          alt="mansion"
          className="md:h-[550px] md:w-[900px] aspect-square z-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.p
          className="text-white text-xl md:text-3xl md:leading-[0] absolute -top-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: translateY }}
        >
          Tenemos el equipo y la experiencia
        </motion.p>
        <motion.h1
          className="text-white text-3xl md:text-6xl xl:text-[7rem] md:leading-[0] font-bold absolute uppercase -top-[3.2rem] md:top-0"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ y: translateY }}
        >
          Construye sueños
        </motion.h1>

        <LeftContent />

        <RightContent />
      </div>
    </main>
  );
};

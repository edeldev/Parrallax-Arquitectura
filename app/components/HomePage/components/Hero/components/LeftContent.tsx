"use client";
import { motion } from "framer-motion";

export const LeftContent = () => {
  return (
    <motion.div
      className="absolute top-[10rem] left-0 text-white w-[400px] text-center hidden xl:flex flex-col gap-1"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h3 className="font-bold">Reinventamos tu espacio</h3>
      <p className="text-balance">
        Dedicados a la rama de la construcción en los sectores industrial y
        residencial.
      </p>
      <motion.button
        className="py-1 px-5 bg-white rounded-md self-start mx-auto text-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Solicitar cotización
      </motion.button>
    </motion.div>
  );
};

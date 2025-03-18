import { motion } from "framer-motion";
import { IMenuNavbar } from "./types";

export const MenuNavbar = ({ setOpen }: IMenuNavbar) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.div
      className="fixed top-[120px] right-0 bg-black py-10 px-20 z-20 rounded-tl-lg rounded-bl-lg"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="text-white flex flex-col justify-center items-center gap-5">
        <motion.li
          whileHover={{ scale: 1.1, color: "red" }}
          transition={{ duration: 0.2 }}
        >
          <a href="#homePage" onClick={handleLinkClick}>
            HomePage
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: "red" }}
          transition={{ duration: 0.2 }}
        >
          <a href="#" onClick={handleLinkClick}>
            About us
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: "red" }}
          transition={{ duration: 0.2 }}
        >
          <a href="#services" onClick={handleLinkClick}>
            Services
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, color: "red" }}
          transition={{ duration: 0.2 }}
        >
          <a href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

"use client";
import { IconMenu, IconX } from "@tabler/icons-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import { MenuNavbar } from "./MenuNavbar";
import Image from "next/image";

export const Header = () => {
  const { scrollY } = useScroll();
  const [innerHeight, setInnerHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setIsMounted(true);
  }, []);

  const blurBackground = useTransform(
    scrollY,
    [0, innerHeight / 2],
    ["blur(0)", "blur(5px)"]
  );
  const backgroundColor = useTransform(
    scrollY,
    [0, innerHeight / 2],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  return (
    <>
      <motion.header
        style={{
          backdropFilter: blurBackground,
          backgroundColor: isMounted ? backgroundColor : "rgba(0, 0, 0, 0)",
        }}
        className="fixed h-[120px] w-full overflow-hidden flex justify-between items-center px-5 md:px-20 top-0 z-20"
      >
        <ul className="gap-5 text-white flex-1 uppercase font-bold hidden md:flex">
          <li>
            <a href="#homePage">HomePage</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
        <a href="#homePage">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-[70px] w-[150px] md:h-[80px] md:w-[180px] aspect-square"
          />
        </a>
        <ul className="hidden md:flex gap-5 text-white flex-1 justify-end uppercase font-bold">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        {!open ? (
          <IconMenu
            className="cursor-pointer text-white md:hidden"
            onClick={() => setOpen(true)}
          />
        ) : (
          <IconX
            className="cursor-pointer text-white md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </motion.header>

      <AnimatePresence>
        {open && <MenuNavbar setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
};

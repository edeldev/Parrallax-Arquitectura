import Image from "next/image";
import { CTA } from "../ui/CTA";

export const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="p-5 rounded-tl-[3rem] rounded-tr-[3rem] bg-white relative">
        <Image
          src="/images/footer.webp"
          alt="footer"
          className="w-full h-[700px] object-cover rounded-[3rem]"
          width={1000}
          height={1000}
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-5">
          <p className="text-white text-4xl md:text-[90px] uppercase text-center leading-none font-bold">
            Contact us <span className="block">today</span>
          </p>

          <CTA
            bgColor="bg-white"
            bgSecondary="bg-[#D4D4D4]"
            paddingX="px-4"
            paddingY="py-2"
            title="Contact us"
            colorTitle="text-black"
            rotateIcon="rotate-45"
          />
        </div>
      </div>
      <div className="bg-white flex justify-center pb-5">
        <a href="#homePage">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        </a>
      </div>
    </div>
  );
};

import Image from "next/image";
import { InfiniteSlider } from "@/app/components/ui/infinite-slider";

export const SponsorsPage = () => {
  return (
    <InfiniteSlider
      gap={24}
      reverse
      className="bg-white p-5 md:p-10 w-full md:w-[96%] mx-auto md:rounded-md"
    >
      <Image
        src="/images/proveedor1.png"
        alt="Apple Music logo"
        className="h-[40px] w-auto"
        width={100}
        height={100}
      />
      <Image
        src="/images/proveedor2.png"
        alt="Chrome logo"
        className="h-[40px] w-auto"
        width={100}
        height={100}
      />
      <Image
        src="/images/proveedor3.png"
        alt="Strava logo"
        className="h-[40px] w-auto"
        width={100}
        height={100}
      />
      <Image
        src="/images/proveedor4.png"
        alt="Nintendo logo"
        className="h-[40px] w-auto"
        width={100}
        height={100}
      />
      <Image
        src="/images/proveedor5.png"
        alt="Jquery logo"
        className="h-[40px] w-auto"
        width={100}
        height={100}
      />
      <Image
        src="/images/proveedor6.png"
        alt="Prada logo"
        className="h-[40px] w-auto"
        width={100}
        height={100}
      />
    </InfiniteSlider>
  );
};

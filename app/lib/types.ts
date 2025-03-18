import { StaticImageData } from "next/image";

export type TService = {
  id: number;
  category: string;
  title: string;
  src: StaticImageData;
};

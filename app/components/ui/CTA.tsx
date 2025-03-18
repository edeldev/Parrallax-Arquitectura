import Link from "next/link";
import { IconArrowUp } from "@tabler/icons-react";
import { ICTA } from "./types";

export const CTA = ({
  bgColor,
  bgSecondary,
  paddingX,
  paddingY,
  title,
  colorTitle,
  rotate = "",
  rotateIcon,
}: ICTA) => {
  return (
    <div
      className={`flex gap-2 items-center ${bgColor} ${paddingX} ${paddingY} rounded-3xl transform ${rotate} group cursor-pointer`}
    >
      <p className={`font-bold ${colorTitle}`}>{title}</p>

      <Link href="" className={`${bgSecondary} rounded-full p-2`}>
        <IconArrowUp
          stroke={1}
          className={`transform ${rotateIcon} transition-transform duration-300 group-hover:scale-150`}
        />
      </Link>
    </div>
  );
};

import type { OrbProps, OrbType } from "./orb-type";
import { OrbsVariant } from "@/src/lib/tailwind/orbs";
import { cn } from "@/src/lib/tailwind/utils";

export const Orb = ({ className, color }: OrbProps) => {
  const OrbGradientStyles: Record<OrbType, string> = {
    green:
      "bg-gradient-to-r from-primary-green  md:-left-[45%] md:top-[95%] lg:-left-28 lg:top-[45rem]",
    purple:
      "bg-gradient-to-r from-primary-purple bottom-0 md:left-1/3 md:top-2/3 lg:left-1/2",
    orange:
      "bg-gradient-to-r from-primary-orange md:-left-1/3 md:-top-[10%] lg:-left-20 lg:-top-10 ",
    red: "bg-gradient-to-r from-red-400 md:left-3/4",
  };
  const styleKey = color;
  return (
    <>
      <div
        className={cn(
          OrbsVariant({ color, className }),
          OrbGradientStyles[styleKey],
          "-z-20 w-[720px] rounded-s-full opacity-80"
        )}
      >
        {" "}
        <div
          className={cn(
            OrbsVariant({ color, className }),
            "top-0 -z-10 w-[238px] rounded-full opacity-100"
          )}
        ></div>
      </div>
    </>
  );
};

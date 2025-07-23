/* import { OrbsVariant } from "@/app/lib/tailwind/orbs";
import { cn } from "@/app/lib/tailwind/utils";
import type { OrbProps, OrbType } from "./orb-type";

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
}; */
/* import { GreenOrb, OrangeOrb, PurpleOrb, RedOrb } from "./Orbs";

export const Background = () => {
  return (
    <div className="min-h-scree absolute inset-0 -z-50 overflow-hidden">
      <GreenOrb className="bottom-0 left-0" size={400} opacity={0.8} />
      <RedOrb className="right-0 top-10" size={400} opacity={0.8} />{" "}
      <PurpleOrb className="-bottom-52 right-0" size={700} opacity={0.8} />{" "}
      <OrangeOrb className="-top-40 left-0" size={700} opacity={0.8} />
    </div>
  );
}; */

export const Background = () => {
  return (
    <div
      className="fixed -z-50 h-full min-h-screen w-full overflow-hidden bg-no-repeat
        md:bg-[url('/md-green-orb.svg'),url('/md-red-orb.svg'),url('/md-purple-orb.svg'),url('/md-orange-orb.svg')]
        md:bg-[position:bottom_left_,top_15rem_right,bottom_right,top_left]
        lg:bg-[url('/green-orb.svg'),url('/red-orb.svg'),url('/purple-orb.svg'),url('/orange-orb.svg')]
        lg:bg-[position:bottom_left_5rem,top_20rem_right,bottom_right,top_left]"
    ></div>
  );
};

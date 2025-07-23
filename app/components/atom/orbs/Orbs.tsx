import Image from "next/image";
import { OrbProps } from "./orb-type";

export const GreenOrb = ({
  className,
  size = 400,
  opacity = 0.6,
}: OrbProps) => {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      <Image
        alt="Green decorative orb"
        src="/green-orb.svg"
        fill
        quality={100}
        sizes={`${size}px`}
        style={{
          objectFit: "contain",
        }}
        priority={false}
      />
    </div>
  );
};

export const RedOrb = ({ className, size = 400, opacity = 0.6 }: OrbProps) => {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      <Image
        alt="Green decorative orb"
        src="/red-orb.svg"
        fill
        quality={100}
        sizes={`${size}px`}
        style={{
          objectFit: "contain",
        }}
        priority={false}
      />
    </div>
  );
};

export const PurpleOrb = ({
  className,
  size = 400,
  opacity = 0.6,
}: OrbProps) => {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      <Image
        alt="Green decorative orb"
        src="/purple-orb.svg"
        fill
        quality={100}
        sizes={`${size}px`}
        style={{
          objectFit: "contain",
        }}
        priority={false}
      />
    </div>
  );
};

export const OrangeOrb = ({
  className,
  size = 400,
  opacity = 0.6,
}: OrbProps) => {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      <Image
        alt="Green decorative orb"
        src="/orange-orb.svg"
        fill
        quality={100}
        sizes={`${size}px`}
        style={{
          objectFit: "contain",
        }}
        priority={false}
      />
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoProps } from "./logo-type";

const Logo = ({ width = 67, height = 35 }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="flavioshop logo"
        priority={true}
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;

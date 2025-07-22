import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";
import { IconStyle } from "@/app/lib/tailwind/icons";
import iconSetting from "@/app/utils/constants/icons";

export type IconName = (typeof iconSetting.iconName)[number];
export type IconSize = (typeof iconSetting.iconSize)[number];
export type IconWeights = (typeof iconSetting.iconsWeights)[number];

export type IconProps = {
  name: IconName;
  size: IconSize;
  weight: IconWeights;
  variant?: VariantProps<typeof IconStyle>["variant"];
} & ComponentProps<"svg">;

export type IconDetailedProps = Omit<IconProps, "size" | "name">;

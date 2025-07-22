import type { VariantProps } from "class-variance-authority";
import { OrbsVariant } from "@/app/lib/tailwind/orbs";

export interface OrbProps extends VariantProps<typeof OrbsVariant> {
  className?: string;
  color: OrbType;
}

export type OrbType = "green" | "purple" | "orange" | "red";

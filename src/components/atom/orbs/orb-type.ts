import type { VariantProps } from "class-variance-authority";
import { OrbsVariant } from "@/src/lib/tailwind/orbs";

export interface OrbProps extends VariantProps<typeof OrbsVariant> {
  className?: string;
  color: OrbType;
}

export type OrbType = "green" | "purple" | "orange" | "red";

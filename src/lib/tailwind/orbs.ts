import { cva } from "class-variance-authority";

export const OrbsVariant = cva(
  ["absolute overflow-hidden	h-[238px] hidden md:inline "],
  {
    variants: {
      color: {
        green: "bg-primary-green rotate-90",
        purple: "bg-primary-purple rotate-45",
        orange: "bg-primary-orange rotate-135 ",
        red: "bg-red-400 rotate-0 ",
      },
    },
    defaultVariants: {
      color: "purple",
    },
  }
);

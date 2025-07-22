import { cva } from "class-variance-authority";

export const inputVariants = cva(
  ["w-full flex justify-between px-4 py-3 rounded-sm"],
  {
    variants: {
      variant: {
        default:
          "border-[1px]	border-black 	body-xs  aria-invalid:border-red-500 placeholder:text-neutral-score focus:outline-none focus:border-accent-yellow mb-6",
        search:
          "body-regular  placeholder:text-neutral-score bg-neutral-background focus:outline-none focus:border-b-2 focus:border-neutral-score focus:rounded-xs ",
        danger:
          "border-[1px]	border-black 	body-xs border-red-500 placeholder:text-neutral-score focus:outline-none focus:border-accent-yellow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

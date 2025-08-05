import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex flex-wrap	items-center justify-center h-14 rounded-sm text-white px-6 py-2",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-buttonPrimary col-span-2 md:col-span-6 lg:col-span-4 heading-h4 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:bg-accent-yellow  hover:text-black transition duration-500 ease-in-out",
        default_accent:
          "bg-accent-yellow text-black col-span-2 md:col-span-6 lg:col-span-4 border border-black heading-h4  disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:bg-neutral-buttonPrimary hover:text-white transition duration-500 ease-in-out",
        primary:
          "bg-white text-gray-500 col-span-2 md:col-span-6 lg:col-span-3 body-md border border-gray-600	body-md disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:bg-neutral-buttonPrimary hover:text-white transition duration-500 ease-in-out",
        secondary:
          "bg-neutral-buttonPrimary col-span-1 md:col-span-3 label-regular disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:bg-neutral-buttonPrimary hover:text-white transition duration-500 ease-in-out",
        accent:
          "hidden text-black bg-accent-yellow md:flex col-span-2 border border-black heading-h4 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:bg-neutral-buttonPrimary hover:text-white transition duration-500 ease-in-out",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

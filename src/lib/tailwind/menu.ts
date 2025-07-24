import { cva } from "class-variance-authority";

const hamburgerVariants = cva("relative  transition-all duration-300", {
  variants: {
    isOpen: {
      false: "",
      true: "",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

const middleVariants = cva(
  "w-7 h-1 relative rounded  transition-all duration-300 bg-gray-800",
  {
    variants: {
      isOpen: {
        false: "",
        true: "bg-transparent duration-500",
      },
    },
  }
);

const lineVariants = cva(
  "absolute w-7 h-1 bg-gray-800 rounded transition-all duration-500",
  {
    variants: {
      position: {
        before: "-top-2.5 left-0",
        after: "top-2.5 left-0",
      },
      isOpen: {
        false: "",
        true: "",
      },
    },
    compoundVariants: [
      {
        position: "before",
        isOpen: true,
        class: "rotate-45 scale-x-125 translate-y-2.5",
      },
      {
        position: "after",
        isOpen: true,
        class: "-rotate-45 scale-x-125 -translate-y-2.5",
      },
    ],
  }
);

export { hamburgerVariants, middleVariants, lineVariants };

export const menuVariants = {
  open: {
    height: "calc(100vh - var(--nav-height))",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export const itemVariants = {
  open: {
    x: 0,
    size: 1,
    opacity: 1,
    transition: {},
  },
  closed: {
    x: 100,
    size: 3,
    opacity: 0,
    transition: {},
  },
};

export const ulVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

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
    size: 0,
    opacity: 0,
    transition: {},
  },
};

export const containerVariants = {
  open: {
    transition: { staggerChildren: 0.4, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
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

export const buttonWrapperVariants = {
  open: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  closed: {
    scale: 0.8,
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

export const slideFromRightVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

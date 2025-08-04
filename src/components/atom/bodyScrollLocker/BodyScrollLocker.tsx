import { useLockBodyScroll } from "@uidotdev/usehooks";

export const BodyScrollLocker = () => {
  useLockBodyScroll();
  return null;
};

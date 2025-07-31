"use client";

// filepath: [MobileMenu.tsx](http://_vscodecontentref_/2)
import MenuItem from "../menuItem/MenuItem";
import { BodyScrollLocker } from "@/src/components/atom/bodyScrollLocker/BodyScrollLocker";
import { menuVariants, ulVariants } from "@/src/lib/motion/variants";
import { useMenuStore } from "@/src/store/global-store";
import * as motion from "motion/react-client";

export const MobileMenu = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const navHeight = useMenuStore((state) => state.navHeight);

  return (
    <motion.div
      style={
        {
          "--nav-height": `${navHeight}px`,
        } as React.CSSProperties
      }
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={"fixed bottom-0 left-0 w-full overflow-hidden bg-neutral-400"}
    >
      {isOpen && <BodyScrollLocker />}
      <div className="h-full">
        <motion.ul
          className="flex h-full flex-col items-center justify-evenly"
          variants={ulVariants}
        >
          <MenuItem label={"SHOP"} href={""} />
          <MenuItem label={"CART"} href={""} />
          <MenuItem label={"LOGIN"} href={""} />
          <MenuItem label={"SEARCH"} href={""} />
          <MenuItem label={"INFO"} href={""} />
        </motion.ul>
      </div>
    </motion.div>
  );
};

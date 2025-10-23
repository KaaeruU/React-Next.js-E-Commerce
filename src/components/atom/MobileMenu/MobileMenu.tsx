"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import MenuItem from "../menuItem/MenuItem";
import { BodyScrollLocker } from "@/src/components/atom/bodyScrollLocker/BodyScrollLocker";
import MenuLogin from "@/src/components/atom/menuLogin/MenuLogin";
import {
  containerVariants,
  menuVariants,
  ulVariants,
} from "@/src/lib/motion/variants";
import { useGlobalStore } from "@/src/store/global-store";
import { menuItems } from "@/src/utils/constants/data";
import * as motion from "motion/react-client";

export const MobileMenu = () => {
  const { isOpen, setIsOpen } = useGlobalStore();
  const navHeight = useGlobalStore((state) => state.navHeight);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <motion.div
      style={
        {
          "--nav-height": `${navHeight}px`,
        } as React.CSSProperties
      }
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={"fixed bottom-0 left-0 w-full overflow-hidden bg-neutral-800"}
    >
      {isOpen && <BodyScrollLocker />}
      <div className="flex h-full flex-col justify-between">
        <motion.ul
          className="mx-8 h-1/2 border-b-2 border-b-slate-100 pt-10"
          variants={ulVariants}
        >
          {menuItems.map(({ label, href }) => (
            <MenuItem label={label} href={href} key={label} />
          ))}
        </motion.ul>
        <motion.div
          variants={containerVariants}
          className="grid-container mt-16 grid h-1/2"
        >
          <MenuLogin />
        </motion.div>
      </div>
    </motion.div>
  );
};

"use client";

// filepath: [MobileMenu.tsx](http://_vscodecontentref_/2)
import MenuItem from "../menuItem/MenuItem";
import { BodyScrollLocker } from "@/src/components/atom/bodyScrollLocker/BodyScrollLocker";
import MenuLogin from "@/src/components/atom/menuLogin/MenuLogin";
import {
  containerVariants,
  menuVariants,
  ulVariants,
} from "@/src/lib/motion/variants";
import { useGlobalStore } from "@/src/store/global-store";
import * as motion from "motion/react-client";

export const MobileMenu = () => {
  const isOpen = useGlobalStore((state) => state.isOpen);
  const navHeight = useGlobalStore((state) => state.navHeight);
  const menuItems = [
    { label: "SHOP", href: "" },
    { label: "CART", href: "" },
    { label: "LOGIN", href: "" },
    { label: "SEARCH", href: "" },
    { label: "INFO", href: "" },
  ];

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
      <div className="h-full">
        <motion.ul
          className="mx-8 h-1/2 border-b-2 border-b-slate-100 pt-10"
          variants={ulVariants}
        >
          {menuItems.map((item) => (
            <MenuItem label={item.label} href={item.href} key={item.label} />
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

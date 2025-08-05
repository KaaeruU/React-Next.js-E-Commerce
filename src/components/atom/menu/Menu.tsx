"use client";

import {
  hamburgerVariants,
  lineVariants,
  middleVariants,
} from "@/src/lib/tailwind/menu";
import { useGlobalStore } from "@/src/store/global-store";

// filepath: [Menu.tsx](http://_vscodecontentref_/1)

export default function HamburgerMenu() {
  const isOpen = useGlobalStore((state) => state.isOpen);
  const toggleMenu = useGlobalStore((state) => state.toggleMenu);

  return (
    <button
      onClick={toggleMenu}
      className={hamburgerVariants({ isOpen })}
      aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
    >
      <div className={middleVariants({ isOpen })}>
        <span className={lineVariants({ position: "before", isOpen })} />
        <span className={lineVariants({ position: "after", isOpen })} />
      </div>
    </button>
  );
}

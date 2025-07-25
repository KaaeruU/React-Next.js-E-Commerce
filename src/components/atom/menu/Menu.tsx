"use client";

import { useState } from "react";
import {
  hamburgerVariants,
  lineVariants,
  middleVariants,
} from "@/src/lib/tailwind/menu";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-2xl shadow-2xl">
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
    </div>
  );
}

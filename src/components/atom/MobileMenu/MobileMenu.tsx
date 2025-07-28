"use client";

// filepath: [MobileMenu.tsx](http://_vscodecontentref_/2)
import { useMenuStore } from "@/src/store/global-store";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const BodyScrollLocker = () => {
  useLockBodyScroll();
  return null;
};

export const MobileMenu = () => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const navHeight = useMenuStore((state) => state.navHeight);

  return (
    <div
      style={
        {
          "--nav-height": `${navHeight}px`,
        } as React.CSSProperties
      }
      className={`fixed bottom-0 left-0 w-full overflow-hidden bg-neutral-background
        transition-all duration-300 ease-in-out
        ${isOpen ? "h-[calc(100vh-var(--nav-height))]" : "h-0"}`}
    >
      {isOpen && <BodyScrollLocker />}
      <ul>
        <li>link</li>
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </div>
  );
};

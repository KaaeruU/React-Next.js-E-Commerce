"use client";

// filepath: [MobileMenu.tsx](http://_vscodecontentref_/2)
import { Heading } from "../heading/Heading";
import { useMenuStore } from "@/src/store/global-store";

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
      className={`fixed bottom-0 left-0 w-full overflow-hidden bg-red-400 text-white
        transition-all duration-300 ease-in-out ${
        isOpen ? "h-[calc(100vh-var(--nav-height))]" : "h-0" }`}
    >
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
      <Heading as={"h2"} styledAs={"h2"} className="mb-20">
        ciaoooo
      </Heading>
    </div>
  );
};

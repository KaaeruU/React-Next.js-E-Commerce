"use client";

// filepath: [MobileMenu.tsx](http://_vscodecontentref_/2)
import Link from "next/link";
import { Heading } from "../heading/Heading";
import { BodyScrollLocker } from "@/src/components/atom/bodyScrollLocker/BodyScrollLocker";
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
      className={`fixed bottom-0 left-0 w-full overflow-hidden bg-neutral-buttonSecondary
        transition-all duration-300 ease-in-out
        ${isOpen ? "h-[calc(100vh-var(--nav-height))]" : "h-0"}`}
    >
      {isOpen && <BodyScrollLocker />}
      <div className="h-full">
        <ul className="relative flex h-full flex-col items-center justify-evenly">
          <li className="contents">
            <Link href={"/shop"}>
              {" "}
              <Heading
                as={"h2"}
                styledAs={"h2"}
                className={`absolute transform duration-1000 ease-out ${isOpen ? "right-1/2" : "-right-20"}`}
              >
                Shop
              </Heading>
            </Link>
          </li>
          <li className="contents">
            <Link href={"/cart"}>
              {" "}
              <Heading
                as={"h3"}
                styledAs={"h2"}
                className={`absolute transform duration-[1400ms] ease-out
                  ${isOpen ? "right-1/2" : "-right-20"}`}
              >
                Cart
              </Heading>
            </Link>
          </li>

          <li className="contents">
            <Link href={"/"}>
              {" "}
              <Heading
                as={"h4"}
                styledAs={"h2"}
                className={`absolute transform duration-[1800ms] ease-out
                  ${isOpen ? "right-1/2" : "-right-20"}`}
              >
                Login
              </Heading>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

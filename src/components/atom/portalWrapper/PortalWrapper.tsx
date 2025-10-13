import { ReactElement, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const PortalWrapper = ({
  children,
  wrapperId,
}: {
  children: ReactElement;
  wrapperId: string;
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById(wrapperId);

    if (!element) {
      const newElement = document.createElement("div");
      newElement.setAttribute("id", wrapperId);
      document.body.appendChild(newElement);
      setContainer(newElement);
    }

    setContainer(element);
  }, [wrapperId]);

  if (!container) return null;
  return createPortal(children, container);
};

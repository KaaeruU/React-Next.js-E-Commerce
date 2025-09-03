import * as React from "react";

/**
copiato paro paro da stackoverflow, evitabile se riuscissi a capire perchè useMediaQuery  mi da un SSR error
 */
export function useResponsive(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

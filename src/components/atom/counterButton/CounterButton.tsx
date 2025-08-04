"use client";

import { Text } from "@/src/components/atom/text/Text";
import { useGlobalStore } from "@/src/store/global-store";

const CounterButton = () => {
  const { items, setItems } = useGlobalStore();

  const increment = () => {
    setItems(items + 1);
  };

  const decrement = () => {
    if (items != 0) {
      setItems(items - 1);
    }
  };
  return (
    <div
      className="col-span-1 flex w-32 items-center justify-around border border-black
        md:col-span-2 lg:col-span-1"
    >
      <button onClick={decrement} className="px-2">
        <Text as={"span"} styledAs={"button"}>
          -
        </Text>
      </button>
      <Text as={"span"} styledAs={"button"}>
        {items}
      </Text>
      <button onClick={increment} className="px-2">
        <Text as={"span"} styledAs={"button"}>
          +
        </Text>
      </button>
    </div>
  );
};

export default CounterButton;

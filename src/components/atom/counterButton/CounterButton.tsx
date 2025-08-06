"use client";

import { Text } from "@/src/components/atom/text/Text";

const CounterButton = ({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count != 0) {
      setCount((count) => count - 1);
    }
  };
  return (
    <div
      className="col-span-1 flex w-2/5 items-center justify-around border border-black
        md:col-span-2 lg:col-span-1"
    >
      <button onClick={decrement} className="px-2">
        <Text as={"span"} styledAs={"button"}>
          -
        </Text>
      </button>
      <Text as={"span"} styledAs={"button"}>
        {count}
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

"use client";

import { useState } from "react";
import { Text } from "../text/Text";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  return (
    <div
      className="col-span-1 flex w-32 items-center justify-around border-2 md:col-span-2
        lg:col-span-1"
    >
      <button onClick={decrement} className="px-2">
        -
      </button>
      <Text as={"span"} styledAs={"button"}>
        {count}
      </Text>
      <button onClick={increment} className="px-2">
        +
      </button>
    </div>
  );
};

export default CounterButton;

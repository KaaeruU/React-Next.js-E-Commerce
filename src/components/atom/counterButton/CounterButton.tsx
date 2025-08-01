"use client";

import { useState } from "react";
import { Button } from "../buttons/Button";
import { Text } from "@/src/components/atom/text/Text";

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
    <div className="flex flex-nowrap justify-between p-4">
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
          {count}
        </Text>
        <button onClick={increment} className="px-2">
          <Text as={"span"} styledAs={"button"}>
            +
          </Text>
        </button>
      </div>
      <Button
        label={"Aggiungi al carrello"}
        isDisabled={count ? false : true}
        variant={"secondary"}
        className="whitespace-nowrap md:w-1/2 md:text-14"
      />
    </div>
  );
};

export default CounterButton;

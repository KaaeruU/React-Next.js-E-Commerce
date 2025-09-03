import React from "react";
import { Heading } from "../heading/Heading";
import { Text } from "../text/Text";
import { ErrorHandlerProps } from "./errorHandler-type";

export const ErrorHandler = ({ message, cause }: ErrorHandlerProps) => {
  return (
    <div className="rounded border border-red-500 bg-red-100 p-4 text-red-700">
      <Heading as={"h1"} styledAs={"h1"}>
        {message}
      </Heading>
      <Text as={"label"} styledAs={"body"}>
        Cause: {String(cause)}
      </Text>
    </div>
  );
};

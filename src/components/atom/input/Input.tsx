"use client";

import React, { useEffect, useRef, useState } from "react";
import { useFormField } from "../../molecules/Form";
import { Icon } from "../icon/Icon";
import type { InputProps } from "./input-type";
import { inputVariants } from "@/src/lib/tailwind/inputs";
import { cn } from "@/src/lib/tailwind/utils";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      placeholder,
      icon,
      variant = "default",
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value || "");
    const inputRef = useRef(value || "");
    const { error } = useFormField(); //parlarne con michele

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      inputRef.current = e.target.value;
      onChange?.(e);
    };

    const handleMouseEnter = () => {
      setInternalValue("");
    };

    const handleMouseLeave = () => {
      setInternalValue(inputRef.current);
    };

    return (
      <>
        <div
          className={cn(
            variant === "default" &&
              "relative col-span-2 md:col-span-6 lg:col-span-4",
            variant === "search" &&
              "relative col-span-2 border-b-2 hover:col-span-3 md:col-span-6 lg:col-span-8"
          )}
        >
          <input
            ref={ref}
            value={internalValue}
            onChange={handleChange}
            placeholder={placeholder}
            className={cn(
              inputVariants({
                variant: error ? "danger" : variant,
                className,
              })
            )}
            {...(variant === "search" && {
              onMouseLeave: handleMouseLeave,
              onMouseEnter: handleMouseEnter,
            })}
            {...props}
          />
          {icon && (
            <Icon
              name={icon}
              size="24"
              weight="regular"
              className={cn(
                variant === "default" && "absolute right-3 top-3.5",
                variant === "search" &&
                  "absolute right-0 top-[10px] md:top-4 lg:top-3"
              )}
            ></Icon>
          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

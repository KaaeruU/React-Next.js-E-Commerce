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
      type,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value || "");
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(value || "");
    const { error } = useFormField();

    // Check if this is a password input
    const isPasswordInput = type === "password";
    const inputType = isPasswordInput && showPassword ? "text" : type;

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

    const handleIconClick = () => {
      if (isPasswordInput) {
        setShowPassword(!showPassword);
      }
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
            type={inputType}
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
          {(icon || isPasswordInput) && (
            <button
              type="button"
              onClick={handleIconClick}
              className={cn(
                "absolute z-10 flex items-center justify-center",
                variant === "default" && "right-3 top-3.5",
                variant === "search" &&
                  "absolute right-0 top-[10px] md:top-4 lg:top-3",
                isPasswordInput && showPassword && "opacity-50",
                isPasswordInput && "cursor-pointer hover:opacity-75",
                !isPasswordInput && "cursor-default"
              )}
              disabled={!isPasswordInput}
            >
              <Icon
                name={icon || "EyeOn"}
                size="24"
                weight="regular"
                className={cn(
                  isPasswordInput && showPassword && "line-through decoration-2"
                )}
              />
            </button>
          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";

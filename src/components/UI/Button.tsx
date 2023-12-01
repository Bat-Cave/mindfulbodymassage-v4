"use client";

import React, { forwardRef, type ForwardedRef, type LegacyRef } from "react";
import { FocusRing } from "@react-aria/focus";
import type { ButtonProps } from "./ButtonConstants";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex select-none items-center justify-center rounded-full font-sans transition duration-200 focus:outline-none",
  {
    variants: {
      variant: {
        solid:
          "shadow text-white border px-2 hover:border-primary-content hover:bg-primary-content disabled:bg-slate-500 disabled:border-slate-500 bg-primary border-primary active:border-primary-content active:bg-primary-content",
        outlined:
          "shadow bg-white border-2 px-2 border-primary text-primary hover:text-primary disabled:text-slate-500 disabled:border-slate-500 active:text-primary",
        text: "text-primary rounded-none border-0 h-auto w-auto hover:text-primary disabled:text-slate-500",
      },
      size: {
        large: "h-12 w-full max-w-[300px]",
        small: "h-8 w-auto max-w-none",
        full: "h-12 w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "large",
    },
    compoundVariants: [
      {
        variant: "text",
        className: "h-auto w-auto max-w-none",
      },
    ],
  }
);

const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      isLoading = false,
      disabled = false,
      variant = "solid",
      size = "large",
      className,
      children,
      onClick,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    if (props.href) {
      return (
        <FocusRing
          focusRingClass={twMerge(
            `active:ring-primary-content ring-primary`,
            `hover:ring-primary-content ring-1 ring-offset-2 ring-offset-white`
          )}
        >
          <a
            ref={ref as LegacyRef<HTMLAnchorElement>}
            className={twMerge(buttonVariants({ variant, size }), className)}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
            {...props}
          >
            {isLoading ? <>Loading...</> : children}
          </a>
        </FocusRing>
      );
    }

    return (
      <FocusRing
        focusRingClass={twMerge(
          `active:ring-primary-content ring-primary`,
          `hover:ring-primary-content ring-1 ring-offset-2 ring-offset-white`
        )}
      >
        <button
          ref={ref}
          className={twMerge(buttonVariants({ variant, size }), className)}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          onClick={(e) => {
            if (isLoading) return;
            onClick?.(e);
          }}
          {...props}
          disabled={disabled || isLoading}
        >
          {isLoading ? <>Loading...</> : children}
        </button>
      </FocusRing>
    );
  }
);

Button.displayName = "Button";

export default Button;
export { buttonVariants };

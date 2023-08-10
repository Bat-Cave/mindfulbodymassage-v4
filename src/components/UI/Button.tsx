import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
} from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "text";
  color?: "blue" | "slate" | "white";
  className?: string;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline" | "text";
  color?: "blue" | "slate" | "white";
  className?: string;
  href: string;
}

type FinalProps = ButtonProps | AnchorProps;

export const buttonVariants = cva("a", {
  variants: {
    variant: {
      solid:
        "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors",
      outline:
        "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none transition-colors",
      text: "bg-transparent text-primary hover:text-primary-shade focus-visible:outline-primary active:text-blue-100 focus-visible:outline-primary focus-visible:outline-offset-1 active:outline-primary-shade transition-colors",
    },
    color: {
      slate: "",
      white: "",
      blue: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "slate",
      className:
        "bg-dark-gray text-white hover:bg-gray hover:text-white active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-800",
    },
    {
      variant: "solid",
      color: "blue",
      className:
        "bg-primary text-white hover:text-slate-100 hover:bg-primary-shade active:bg-blue-800 active:text-blue-100 focus-visible:outline-primary active:outline-primary-shade",
    },
    {
      variant: "solid",
      color: "white",
      className:
        "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    },
    {
      variant: "outline",
      color: "slate",
      className:
        "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    },
    {
      variant: "outline",
      color: "white",
      className:
        "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
    },
    {
      variant: "text",
      color: "slate",
      className:
        "bg-transparent text-primary hover:text-primary-shade focus-visible:outline-primary active:text-blue-100 focus-visible:outline-primary focus-visible:outline-offset-1 active:outline-primary-shade",
    },
  ],
  defaultVariants: { variant: "solid", color: "slate" },
});

const Button: React.FC<FinalProps> = forwardRef(
  ({ variant = "solid", color = "slate", className, ...props }, ref) => {
    const finalClassName = twMerge(
      buttonVariants({ variant, color }),
      className
    );

    if ("href" in props) {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={finalClassName}
          {...props}
        />
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={finalClassName}
        {...props}
      />
    );
  }
);

export default Button;

Button.displayName = "Button";

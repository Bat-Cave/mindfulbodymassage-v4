import type { HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

const PageTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "mb-12 text-center font-gabriela text-3xl font-bold md:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default PageTitle;

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { buttonVariants } from "~/components/UI/Button";

export default function Custom404() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-primary">
      <h1 className="text-3xl font-bold text-primary-content">
        Page not found
      </h1>
      <Link
        href="/"
        className={twMerge(
          buttonVariants({ variant: "outlined", size: "large" })
        )}
      >
        Go Home
      </Link>
    </div>
  );
}

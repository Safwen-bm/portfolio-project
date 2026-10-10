import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[50px] w-full rounded-xl border border-line bg-subtle px-4 text-base text-ink outline-none transition-all placeholder:text-muted/70 focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/15",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
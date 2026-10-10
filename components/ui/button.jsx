import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white shadow-lift hover:-translate-y-0.5 hover:bg-accent-hover active:translate-y-0",
        // for dark sections
        glow:
          "bg-glow text-ink shadow-glow hover:-translate-y-0.5 hover:bg-white active:translate-y-0",
        ghost:
          "border-2 border-white/30 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink",
        saffron:
          "bg-saffron text-ink shadow-soft hover:-translate-y-0.5 hover:brightness-95",
        dark: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink/90",
        light: "bg-white text-accent shadow-soft hover:-translate-y-0.5",
        outline:
          "border-2 border-ink/80 bg-transparent text-ink hover:-translate-y-0.5 hover:bg-ink hover:text-white",
        primary: "bg-primary text-ink",
      },
      size: {
        default: "h-[50px] px-7",
        sm: "h-[44px] px-5",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }

import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = React.forwardRef(
  (props, ref) => {
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <DialogPrimitive.Content
          ref={ref}
          className="fixed top-1/2 left-1/2 w-full max-w-lg transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-md"
          {...props}
        >
          {props.children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);

export const DialogTitle = DialogPrimitive.Title;
export const DialogClose = DialogPrimitive.Close;

// If Radix throws displayName errors, ensure it's removed or used conditionally
DialogContent.displayName = "DialogContent";

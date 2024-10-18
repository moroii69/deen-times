"use client"; // directive indicating client-side rendering

import * as React from "react"; // import react and its utilities
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"; // import radix scroll area components

import { cn } from "@/lib/utils"; // import utility function for joining class names

// scrollarea component using forwardref for flexible styling and ref forwarding
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref} // pass ref to the scroll area root element
    className={cn("relative overflow-hidden", className)} // default styles for scroll area
    {...props} // spread other props like id, role, etc.
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children} {/* render children elements inside the viewport */}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar /> {/* render scrollbar for scroll area */}
    <ScrollAreaPrimitive.Corner /> {/* render corner element for scrollbar */}
  </ScrollAreaPrimitive.Root>
));
// set display name for scrollarea
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

// scrollbar component using forwardref, with vertical orientation as default
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref} // pass ref to the scrollbar element
    orientation={orientation} // set the orientation of the scrollbar
    className={cn(
      "flex touch-none select-none transition-colors", // common scrollbar styles
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]", // styles for vertical scrollbar
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]", // styles for horizontal scrollbar
      className // merge additional class names passed in props
    )}
    {...props} // spread other props like id, role, etc.
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    {/* thumb element inside the scrollbar for dragging */}
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
// set display name for scrollbar
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// export scrollarea and scrollbar components
export { ScrollArea, ScrollBar };

"use client" // directive indicating client-side rendering

import * as React from "react" // import react and its utilities
import * as SwitchPrimitives from "@radix-ui/react-switch" // import radix switch components

import { cn } from "@/lib/utils" // import utility function for joining class names

// switch component using forwardref for flexible styling and ref forwarding
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", 
      className // apply additional class names
    )}
    {...props} // spread other props like id, role, etc.
    ref={ref} // pass ref to the switch root element
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" // thumb styles for checked and unchecked states
      )}
    />
  </SwitchPrimitives.Root>
))
// set display name for switch component
Switch.displayName = SwitchPrimitives.Root.displayName

// export switch component
export { Switch }

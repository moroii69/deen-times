"use client" // directive indicating client-side rendering

import * as React from "react" // import react and its utilities
import * as TabsPrimitive from "@radix-ui/react-tabs" // import radix tabs components

import { cn } from "@/lib/utils" // import utility function for joining class names

// using the radix root tabs component
const Tabs = TabsPrimitive.Root

// tabslist component for handling the list of tabs
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref} // pass ref to tabs list element
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", 
      className // apply additional class names
    )}
    {...props} // spread other props
  />
))
// set display name for tabslist component
TabsList.displayName = TabsPrimitive.List.displayName

// tabstrigger component for individual tab triggers
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref} // pass ref to tabs trigger element
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", 
      className // apply additional class names
    )}
    {...props} // spread other props
  />
))
// set display name for tabstrigger component
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// tabscontent component for displaying tab content
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref} // pass ref to tabs content element
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", 
      className // apply additional class names
    )}
    {...props} // spread other props
  />
))
// set display name for tabscontent component
TabsContent.displayName = TabsPrimitive.Content.displayName

// export all tab components
export { Tabs, TabsList, TabsTrigger, TabsContent }

import * as React from "react" // import react and its utilities

import { cn } from "@/lib/utils" // import utility function for joining class names

// card component definition using forwardref for flexible styling and ref forwarding
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // pass ref to the card container
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", // default card styles
      className // merge any additional class names passed in props
    )}
    {...props} // spread other div props like id, role, etc.
  />
))
// display name for the card component
Card.displayName = "Card"

// cardheader component for card's header section with forwardref
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // flexbox layout and padding
    {...props}
  />
))
// display name for the cardheader component
CardHeader.displayName = "CardHeader"

// cardtitle component for the title of the card using forwardref
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight", // default title styling
      className // merge any additional class names passed in props
    )}
    {...props} // spread other heading props
  />
))
// display name for the cardtitle component
CardTitle.displayName = "CardTitle"

// carddescription component for card's description with forwardref
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // description text styling
    {...props} // spread other paragraph props
  />
))
// display name for the carddescription component
CardDescription.displayName = "CardDescription"

// cardcontent component for the main content area of the card
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // apply padding
))
// display name for the cardcontent component
CardContent.displayName = "CardContent"

// cardfooter component for the footer section of the card
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // flexbox layout for footer
    {...props}
  />
))
// display name for the cardfooter component
CardFooter.displayName = "CardFooter"

// export all card-related components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

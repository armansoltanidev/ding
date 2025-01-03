import * as React from "react";

import { cn } from "@repo/design-system/lib/utils";

const DebitCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl flex flex-col justify-between border bg-gradient-to-tr from-blue-400 to-blue-600 text-card-foreground p-6 h-52 max-w-lg",
      className
    )}
    {...props}
  />
));

DebitCard.displayName = "Card";

const DebitCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between space-y-1.5 ", className)}
    {...props}
  />
));
DebitCardHeader.displayName = "CardHeader";

const DebitCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-center leading-none tracking-tight", className)}
    {...props}
  />
));
DebitCardTitle.displayName = "CardTitle";

const DebitCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DebitCardDescription.displayName = "CardDescription";

const DebitCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
DebitCardContent.displayName = "CardContent";

const DebitCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between items-center ", className)}
    {...props}
  />
));
DebitCardFooter.displayName = "CardFooter";

export {
  DebitCard,
  DebitCardHeader,
  DebitCardFooter,
  DebitCardTitle,
  DebitCardDescription,
  DebitCardContent,
};

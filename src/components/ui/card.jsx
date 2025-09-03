import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col bg-card text-card-foreground rounded-2xl border shadow-card hover:shadow-card-hover",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("@container/card-header gap-1.5 px-6 [.border-b]:pb-6 flex flex-col p-6", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return <h1 data-slot="card-title" className={cn("text-lg font-medium", className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <div data-slot="card-description" className={cn("text-muted-foreground text-[15px]", className)} {...props} />;
}

function CardAction({ className, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div data-slot="card-content" className={cn("flex items-center justify-center px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex flex-wrap flex-1 [.border-t]:pt-6 items-center justify-center min-w-full gap-x-1 gap-y-2 text-xs text-center p-6",
        className
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };

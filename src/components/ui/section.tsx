import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  eyebrow?: string;
}

export function Section({
  className,
  as: Comp = "section",
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn("relative py-20 sm:py-24 lg:py-32", className)}
      {...props}
    />
  );
}

interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

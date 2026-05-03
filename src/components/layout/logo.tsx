import Link from "next/link";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 font-display text-xl tracking-tight",
        className,
      )}
    >
      <span className="relative inline-flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-[-8deg]">
        <Heart className="size-4 fill-current" strokeWidth={0} />
      </span>
      {showWord ? (
        <span>
          HealthWell<span className="text-primary">®</span>
        </span>
      ) : null}
    </Link>
  );
}

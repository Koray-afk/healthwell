import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  if (!showWord) {
    return (
      <Link
        href="/"
        className={cn("relative block h-12 w-52 shrink-0 md:w-60", className)}
      >
        <Image
          src="/LOGO%20SIDEWAYS.png"
          alt="Wizzaid"
          fill
          sizes="288px"
          className="object-contain"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3 font-display text-xl tracking-tight", className)}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center transition-transform group-hover:rotate-[-6deg]",
          "size-16",
        )}
      >
        <Image src="/LOGO%20ONLY.svg" alt="Wizzaid" width={96} height={96} />
      </div>
      {showWord ? (
        <span className="text-2xl font-semibold">Wizzaid<span className="text-primary">®</span></span>
      ) : null}
    </Link>
  );
}

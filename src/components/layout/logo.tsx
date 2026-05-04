import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, showWord = true }: { className?: string; showWord?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3 font-display text-xl tracking-tight", className)}>
      <div className="relative inline-flex size-10 items-center justify-center transition-transform group-hover:rotate-[-6deg]">
        <Image src="/WIZZAID%20LOGO%20WITH%20R.svg" alt="Wizzaid" width={44} height={44} />
      </div>
      {showWord ? (
        <span className="text-lg font-semibold">Wizzaid<span className="text-primary">®</span></span>
      ) : null}
    </Link>
  );
}

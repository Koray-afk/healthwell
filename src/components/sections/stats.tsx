"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Stat =
  | { kind: "number"; value: number; prefix: string; suffix: string; label: string; format: string }
  | { kind: "text"; display: string; label: string };

const stats: Stat[] = [
  { kind: "number", value: 8_000, prefix: "", suffix: "+", label: "Patients Managed", format: "k" },
  { kind: "number", value: 80, prefix: "", suffix: "+", label: "Clinics & Hospitals", format: "raw" },
  { kind: "number", value: 100, prefix: "", suffix: "+", label: "Care Providers", format: "raw" },
  { kind: "number", value: 5, prefix: "", suffix: "+", label: "Health Programs", format: "raw" },
  { kind: "text", display: "GCC + EU", label: "Expansion Markets" },
];

function formatNum(n: number, kind: string) {
  if (kind === "M") return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (kind === "k") return Math.round(n / 1_000) + "k";
  return Math.round(n).toString();
}

function Counter({
  to,
  format,
  prefix = "",
  suffix = "",
}: {
  to: number;
  format: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => prefix + formatNum(v, format) + suffix);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  return (
    <Section id="stats" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          {/* Left — heading */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Statistics
            </span>
            <h2 className="font-display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Users &amp; Engagement
            </h2>
            <p className="max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
              Wizzaid powers continuous care through AI-driven engagement,
              monitoring, and provider workflows — keeping patients connected to
              their clinics, partners, and chronic care programs.
            </p>
          </div>

          {/* Right — stat cards */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.08)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-6"
          >
            {stats.map((s, i) => (
              <motion.li
                key={s.label}
                variants={fadeUp}
                className={cn(
                  "group relative flex min-h-60 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40 hover:bg-secondary/30",
                  // Top row: 2 cards × 3 cols. Bottom row: 3 cards × 2 cols.
                  i < 2 ? "sm:col-span-3" : "sm:col-span-2",
                )}
              >
                {s.kind === "number" ? (
                  <span className="font-display text-6xl text-primary sm:text-7xl">
                    <Counter to={s.value} format={s.format} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                ) : (
                  <span className="whitespace-nowrap font-display text-5xl text-primary sm:text-6xl">
                    {s.display}
                  </span>
                )}
                <p className="mt-6 text-base text-foreground/70">{s.label}</p>
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}

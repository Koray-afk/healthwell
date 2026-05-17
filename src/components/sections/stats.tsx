"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Users, Building2, Stethoscope, Sparkles, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StatIcon = React.ComponentType<{ className?: string }>;

type Stat =
  | { kind: "number"; value: number; prefix: string; suffix: string; label: string; format: string; icon: StatIcon; color: string; bg: string }
  | { kind: "text"; display: string; label: string; icon: StatIcon; color: string; bg: string };

const stats: Stat[] = [
  { kind: "number", value: 8_000, prefix: "", suffix: "+", label: "Patients Managed", format: "k", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { kind: "number", value: 80, prefix: "", suffix: "+", label: "Clinics & Hospitals", format: "raw", icon: Building2, color: "text-violet-500", bg: "bg-violet-500/10" },
  { kind: "number", value: 100, prefix: "", suffix: "+", label: "Care Providers", format: "raw", icon: Stethoscope, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { kind: "number", value: 5, prefix: "", suffix: "+", label: "Health Programs", format: "raw", icon: Sparkles, color: "text-amber-500", bg: "bg-amber-500/10" },
  { kind: "text", display: "GCC + EU", label: "Expansion Markets", icon: Globe, color: "text-rose-500", bg: "bg-rose-500/10" },
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
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.label}
                  variants={fadeUp}
                  className={cn(
                    "group relative flex min-h-60 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-border/80 hover:shadow-lg",
                    i < 2 ? "sm:col-span-3" : "sm:col-span-2",
                  )}
                >
                  {/* Corner glow on hover */}
                  <div className={`pointer-events-none absolute -right-8 -top-8 size-28 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${s.bg}`} />

                  {/* Icon badge */}
                  <span className={cn("inline-flex size-10 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110", s.bg, s.color)}>
                    <Icon className="size-5" />
                  </span>

                  {/* Number / text */}
                  <div className="mt-auto">
                    {s.kind === "number" ? (
                      <span className={cn("font-display text-6xl sm:text-7xl", s.color)}>
                        <Counter to={s.value} format={s.format} prefix={s.prefix} suffix={s.suffix} />
                      </span>
                    ) : (
                      <span className={cn("whitespace-nowrap font-display text-5xl sm:text-6xl", s.color)}>
                        {s.display}
                      </span>
                    )}
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}

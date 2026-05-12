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
    <Section id="stats" className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[2.5rem] bg-dark-section px-8 py-14 sm:px-12 sm:py-20">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center rounded-full border border-dark-section-border bg-dark-section-card px-3 py-1 text-xs font-medium uppercase tracking-widest text-[rgba(255,255,255,0.7)]">
              Traction &amp; Impact
            </span>
            <h2 className="font-display text-balance text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Trusted Across the Healthcare Ecosystem
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-base text-[rgba(255,255,255,0.55)] sm:text-lg">
              Wizzaid enables continuous care through AI-powered engagement, monitoring, and provider workflows across clinics, healthcare partners, and chronic care programs.
            </p>
          </div>

          {/* Stats grid */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.08)}
            className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5"
          >
            {stats.map((s) => (
              <motion.li
                key={s.label}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-dark-section-border bg-dark-section-card p-6 text-left transition-colors hover:border-zinc-500/40"
              >
                {s.kind === "number" ? (
                  <span className="font-display text-5xl text-zinc-400 sm:text-6xl">
                    <Counter to={s.value} format={s.format} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                ) : (
                  <span className="font-display text-4xl text-zinc-400 sm:text-5xl whitespace-nowrap">
                    {s.display}
                  </span>
                )}
                <p className="mt-3 text-sm text-[rgba(255,255,255,0.55)]">{s.label}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-zinc-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}

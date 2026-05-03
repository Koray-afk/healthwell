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
import { Section, SectionHeading } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const stats = [
  { value: 3_000_000, prefix: "+", suffix: "", label: "Health Trackers Utilized", format: "M" },
  { value: 1_800_000, prefix: "+", suffix: "", label: "Users and Downloads", format: "M" },
  { value: 750_000, prefix: "+", suffix: "", label: "Appointments Managed", format: "k" },
  { value: 40, prefix: "+", suffix: "%", label: "Medication Adherence", format: "raw" },
  { value: 75_000, prefix: "+", suffix: "", label: "Community Engagement", format: "k" },
] as const;

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
        <SectionHeading
          eyebrow="Statistics"
          title={
            <>
              Users <span className="italic text-primary">&</span> Engagement
            </>
          }
          description="Through innovative tools and a supportive community, our users have achieved over 100,000 health goals — driving positive change one person at a time."
        />

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
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/40 to-background p-6 text-left transition-colors hover:border-primary/40"
            >
              <span className="font-display text-5xl text-primary sm:text-6xl">
                <Counter to={s.value} format={s.format} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  );
}

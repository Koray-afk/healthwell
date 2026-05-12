"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Activity,
  Pill,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Track = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
};

const tracks: Track[] = [
  {
    id: "ai-assistant",
    title: "AI Health Assistant",
    description:
      "Chat with Wizza AI for personalized guidance, symptom support, and medication help.",
    icon: Sparkles,
    image: "/wizza%20ai%20image%201.png",
  },
  {
    id: "health-insights",
    title: "Personalized Health Insights",
    description:
      "Monitor health scores, vitals, activity, and AI-driven recommendations.",
    icon: HeartPulse,
    image: "/vitalsscreenimage.png",
  },
  {
    id: "medication-adherence",
    title: "Medication Adherence",
    description:
      "Smart reminders and intelligent follow-up notifications for ongoing care.",
    icon: Activity,
    image: "/reminderimage2.png",
  },
  {
    id: "chronic-care",
    title: "Preventive & Chronic Care",
    description:
      "Structured care programs for diabetes, obesity, hypertension, and more.",
    icon: Pill,
    image: "/healthprogramsimage3.png",
  },
  {
    id: "web3-identity",
    title: "Web3 Identity & Rewards",
    description:
      "Secure patient identity, verifiable consent, and engagement rewards on Solana.",
    icon: ShieldCheck,
    image: "/web3identityandrewards.png",
  },
];

// Bare feature images that queue up on the right and march left as you scroll
const IMG_W = 256;
const IMG_GAP = 48;
const IMG_OUTER = IMG_W + IMG_GAP;

/* ---------------------------------------------------------------- */
/*  iPhone mockup — liquid-glass frame; screen content via children  */
/* ---------------------------------------------------------------- */
function PhoneMockup({ children }: { children?: React.ReactNode }) {
  const buttons = [
    { side: "left" as const, top: 82, h: 22 },
    { side: "left" as const, top: 116, h: 30 },
    { side: "left" as const, top: 158, h: 30 },
    { side: "right" as const, top: 130, h: 56 },
  ];
  return (
    <div className="relative" style={{ width: 296, height: 584 }}>
      {/* Outer glass frame */}
      <div
        className="absolute inset-0 rounded-[3.25rem]"
        style={{
          background:
            "linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 45%, #2a2a2c 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.13), 0 30px 80px -10px rgba(0,0,0,0.6), 0 12px 32px -4px rgba(0,0,0,0.45), inset 0 1.5px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.4)",
        }}
      />
      {/* Sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[3.25rem]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 45%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      {/* Side buttons */}
      {buttons.map((b, i) => (
        <div
          key={i}
          className={cn(
            "absolute",
            b.side === "left" ? "rounded-l-sm" : "rounded-r-sm",
          )}
          style={
            {
              [b.side === "left" ? "left" : "right"]: -5,
              top: b.top,
              width: 4,
              height: b.h,
              background:
                b.side === "left"
                  ? "linear-gradient(to right, #4a4a4c, #2c2c2e)"
                  : "linear-gradient(to left, #4a4a4c, #2c2c2e)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.5)",
            } as React.CSSProperties
          }
        />
      ))}
      {/* Screen */}
      <div
        className="absolute overflow-hidden bg-background"
        style={{ inset: 11, borderRadius: "2.6rem" }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 z-30 -translate-x-1/2"
          style={{
            top: 10,
            width: 110,
            height: 32,
            borderRadius: 20,
            background: "#000",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
          }}
        />
        {children}
        {/* Inner depth */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            borderRadius: "2.6rem",
            boxShadow: "inset 0 0 24px rgba(0,0,0,0.22)",
          }}
        />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Section                                                          */
/* ---------------------------------------------------------------- */
export function Tracking() {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const [idx, setIdx] = React.useState(0);
  const lastInteraction = React.useRef(0);
  const active = tracks[idx];

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  // Spring-smoothed progress so every transition glides rather than tracks 1:1
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.0005,
  });

  // Act 0 (0 → 0.10) — just the big heading, full size, alone on screen
  // Act 1 (0.10 → 0.40) — it shrinks + nudges up to sit neatly inside the phone
  const headingOpacity = useTransform(p, [0, 0.4, 0.5], [1, 1, 0]);
  const headingScale = useTransform(p, [0.1, 0.4], [1, 0.48]);
  const headingY = useTransform(p, [0.1, 0.4], [0, -8]);

  // Act 1 — the phone fades + scales in around the heading
  const phoneOpacity = useTransform(p, [0.1, 0.24], [0, 1]);
  const phoneScale = useTransform(p, [0.1, 0.4], [0.92, 1]);

  // Act 2 (0.48 → 0.60) — the app screenshot reveals once the heading has gone
  const screenReveal = useTransform(p, [0.48, 0.6], [0, 1]);

  // Act 3 (0.56 → …) — the left feature panel + the right image filmstrip glide in
  const browseOpacity = useTransform(p, [0.56, 0.68], [0, 1]);
  const panelX = useTransform(p, [0.56, 0.72], [-36, 0]);

  // Active index follows scroll inside act 3
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (Date.now() - lastInteraction.current < 1200) return;
    const start = 0.62;
    const end = 0.97;
    const t = Math.max(0, Math.min(1, (v - start) / (end - start)));
    const next = Math.round(t * (tracks.length - 1));
    if (next !== idx) setIdx(next);
  });

  const setTrack = React.useCallback((i: number) => {
    lastInteraction.current = Date.now();
    setIdx(i);
  }, []);
  const step = React.useCallback((dir: 1 | -1) => {
    lastInteraction.current = Date.now();
    setIdx((v) => (v + dir + tracks.length) % tracks.length);
  }, []);

  // Translate the filmstrip so the active image sits centred behind the phone,
  // which puts the upcoming images just to the right of it.
  const stripX = IMG_OUTER * ((tracks.length - 1) / 2 - idx);

  return (
    <>
      {/* ===================== Desktop: pinned scroll timeline ===================== */}
      <section
        id="features-tracking"
        ref={outerRef}
        className="relative hidden bg-background lg:block"
        style={{ height: "460vh" }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* soft background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,var(--color-primary),transparent)]/8" />

          {/* Layer 1 — bare feature images, queued to the right of the phone */}
          <motion.div
            style={{ opacity: browseOpacity }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            aria-hidden
          >
            <motion.div
              className="flex items-center"
              animate={{ x: stripX }}
              transition={{ type: "spring", stiffness: 90, damping: 22, mass: 0.6 }}
            >
              {tracks.map((t, i) => {
                const ahead = i - idx; // <=0 means active/past — keep hidden behind the phone
                return (
                  <div
                    key={t.id}
                    className="relative shrink-0 overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-foreground/10 transition-all duration-500 ease-out"
                    style={{
                      width: IMG_W,
                      height: IMG_W * 2,
                      marginLeft: IMG_GAP / 2,
                      marginRight: IMG_GAP / 2,
                      opacity: ahead <= 0 ? 0 : Math.max(0.45, 1 - (ahead - 1) * 0.18),
                      transform: `scale(${1 - Math.max(0, ahead - 1) * 0.05})`,
                    }}
                  >
                    <Image
                      src={t.image}
                      alt=""
                      fill
                      sizes="256px"
                      className="object-cover object-top"
                    />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Layer 2 — left feature list ("Figma-style" panel) */}
          <motion.div
            style={{ opacity: browseOpacity }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-full max-w-120 items-center pl-6 pr-8 sm:pl-10 lg:pl-14"
          >
            <motion.div style={{ x: panelX }} className="w-full">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Features
              </span>
              <ul className="pointer-events-auto mt-7 space-y-1">
                {tracks.map((t, i) => {
                  const on = i === idx;
                  const Icon = t.icon;
                  return (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => setTrack(i)}
                        className="group flex w-full items-start gap-4 py-2.5 text-left"
                      >
                        <span
                          className={cn(
                            "mt-3.5 h-px shrink-0 transition-all duration-300",
                            on ? "w-12 bg-primary" : "w-6 bg-border group-hover:w-8 group-hover:bg-muted-foreground/50",
                          )}
                        />
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2.5">
                            <Icon
                              className={cn(
                                "size-4 shrink-0 transition-colors",
                                on ? "text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground",
                              )}
                            />
                            <span
                              className={cn(
                                "font-display text-2xl leading-tight transition-colors",
                                on
                                  ? "text-foreground"
                                  : "text-muted-foreground/35 group-hover:text-muted-foreground/70",
                              )}
                            >
                              {t.title}
                            </span>
                          </span>
                          <motion.span
                            initial={false}
                            animate={{
                              height: on ? "auto" : 0,
                              opacity: on ? 1 : 0,
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="block overflow-hidden"
                          >
                            <span className="mt-2 block max-w-xs pl-6.5 text-sm leading-relaxed text-muted-foreground">
                              {t.description}
                            </span>
                          </motion.span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* prev / next + counter */}
              <div className="pointer-events-auto mt-8 flex items-center gap-3 pl-10">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                  aria-label="Next feature"
                >
                  <ChevronRight className="size-4" />
                </button>
                <span className="ml-2 text-sm tabular-nums text-muted-foreground">
                  {idx + 1} / {tracks.length}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Layer 3 — the phone (screen stays dark until the heading hands off, then the app screens) */}
          <motion.div
            style={{ opacity: phoneOpacity, scale: phoneScale }}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
          >
            <PhoneMockup>
              {/* App screenshot — revealed after the heading; cross-fades per item */}
              <motion.div
                style={{ opacity: screenReveal }}
                className="absolute inset-0"
              >
                <AnimatePresence>
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      sizes="274px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </PhoneMockup>
          </motion.div>

          {/* Layer 4 — the heading: big first, then shrinks to sit neatly inside the phone */}
          <motion.div
            style={{ opacity: headingOpacity }}
            className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center"
          >
            <motion.div
              style={{ y: headingY, scale: headingScale }}
              className="flex max-w-md flex-col items-center px-8 text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Features
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1.12] text-foreground sm:text-5xl">
                Health Tracking
                <br />
                and Monitoring
              </h2>
              <p className="mt-4 max-w-xs text-pretty text-sm text-muted-foreground sm:text-base">
                Track activity, nutrition, vital signs, and medication adherence.
              </p>
              <span className="mt-6 inline-flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                <Activity className="size-5" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== Mobile: simple stacked version ===================== */}
      <Section className="bg-background lg:hidden">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Health Tracking
                <br />
                and Monitoring
              </>
            }
            description="Track activity, nutrition, vital signs, and medication adherence."
          />
          <div className="mt-12 space-y-5">
            {tracks.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.id}
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 40rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="font-display text-2xl text-foreground">
                        {t.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Pill,
  Activity,
  HeartPulse,
  Apple,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const tracks = [
  {
    id: "medication",
    title: "Medication Tracking",
    description:
      "Set reminders for medication intake, track adherence, and receive refill notifications.",
    icon: Pill,
    image:
      "https://framerusercontent.com/images/pOBrOh7Mo3MyTwNtRyIO3KsDDbE.png",
  },
  {
    id: "symptom",
    title: "Symptom Tracking",
    description:
      "Record symptoms, severity, and duration to track health trends and patterns.",
    icon: HeartPulse,
    image:
      "https://framerusercontent.com/images/hbj7WdD7eT5qdttQGw2fWVahojA.png",
  },
  {
    id: "activity",
    title: "Activity Tracking",
    description: "Record daily steps, distance, calories burned, and active minutes.",
    icon: Activity,
    image:
      "https://framerusercontent.com/images/x9fGimzEnIYwaxJkG9dCwHhxy4M.png",
  },
  {
    id: "nutrition",
    title: "Nutrition Tracking",
    description: "Log food intake, track macronutrients, and monitor calorie consumption.",
    icon: Apple,
    image:
      "https://framerusercontent.com/images/zWWLRkMLXUMbalHn0HvzE6ltRQ.png",
  },
  {
    id: "sleep",
    title: "Sleep Tracking",
    description: "Monitor sleep duration, quality, and patterns to optimize sleep habits.",
    icon: Moon,
    image:
      "https://framerusercontent.com/images/80zU2pI28Anyo9vdumlHUF7gsY.png",
  },
];

export function Tracking() {
  const [idx, setIdx] = React.useState(0);
  const active = tracks[idx];
  const containerRef = React.useRef<HTMLDivElement>(null);
  const lastInteractionTime = React.useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (Date.now() - lastInteractionTime.current < 1000) return;
    
    const step = 1 / tracks.length;
    let newIdx = Math.floor(latest / step);
    if (latest === 1) newIdx = tracks.length - 1;
    newIdx = Math.max(0, Math.min(newIdx, tracks.length - 1));
    
    if (newIdx !== idx) {
      setIdx(newIdx);
    }
  });

  const changeTrack = React.useCallback((direction: 1 | -1) => {
    lastInteractionTime.current = Date.now();
    setIdx((v) => (v + direction + tracks.length) % tracks.length);
  }, []);

  const setTrack = React.useCallback((i: number) => {
    lastInteractionTime.current = Date.now();
    setIdx(i);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-secondary/30 lg:h-[500vh]">
      <div className="w-full lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:justify-center lg:overflow-hidden">
        <Section
          id="features-tracking"
          className="w-full bg-transparent lg:py-12"
        >
          <Container>
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Health Tracking <span className="font-sans text-primary">&</span>{" "}
              Monitoring
            </>
          }
          description="Track activity, nutrition, vital signs, and medication adherence — all in one calm, focused experience."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left list */}
          <ul className="flex flex-col gap-2">
            {tracks.map((t, i) => {
              const Icon = t.icon;
              const selected = i === idx;
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setTrack(i)}
                    className={cn(
                      "group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all",
                      selected
                        ? "border-primary/40 bg-background shadow-sm"
                        : "border-transparent bg-background/40 hover:border-border",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors",
                        selected
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-display text-xl">
                        {t.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {t.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* iPhone mockup */}
          <div className="relative mx-auto h-[560px] w-[280px] shrink-0 rounded-[3rem] border-[10px] border-[#1c1c1e] bg-[#1c1c1e] shadow-2xl">
            <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#1c1c1e]" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-muted">
              <AnimatePresence>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right details + nav */}
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <active.icon className="size-6" />
            </span>
            <h3 className="font-display text-3xl">{active.title}</h3>
            <p className="text-muted-foreground">{active.description}</p>
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => changeTrack(-1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary"
                aria-label="Previous"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => changeTrack(1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background hover:bg-secondary"
                aria-label="Next"
              >
                <ChevronRight className="size-4" />
              </button>
              <span className="ml-3 text-xs text-muted-foreground">
                {idx + 1} / {tracks.length}
              </span>
            </div>
          </div>
        </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}

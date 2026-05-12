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
    id: "ai-assistant",
    title: "AI Health Assistant",
    description:
      "Chat with Wizza AI for personalized health guidance, symptom support, medication help, and continuous engagement.",
    detail:
      "Personalized AI guidance for symptoms, medications, appointments, and health-related questions.",
    icon: Pill,
    image: "/wizza%20ai%20image%201.png",
  },
  {
    id: "health-insights",
    title: "Personalized Health Insights",
    description:
      "Monitor health scores, vitals, activity, and personalized recommendations powered by AI-driven analysis.",
    detail:
      "Track health trends, vitals, activity, and AI-generated recommendations in one connected experience.",
    icon: HeartPulse,
    image: "/vitalsscreenimage.png",
  },
  {
    id: "medication-adherence",
    title: "Medication Adherence",
    description:
      "Set reminders, improve adherence, and receive intelligent follow-up notifications for ongoing care.",
    detail:
      "Improve follow-up and medication consistency with intelligent reminders and proactive notifications.",
    icon: Activity,
    image: "/reminderimage2.png",
  },
  {
    id: "chronic-care",
    title: "Preventive & Chronic Care Programs",
    description:
      "Support long-term health outcomes with structured care programs for diabetes, obesity, hypertension, and more.",
    detail:
      "Deliver structured preventive and chronic care journeys designed for better long-term outcomes.",
    icon: Moon,
    image: "/healthprogramsimage3.png",
  },
  {
    id: "web3-identity",
    title: "Web3 Identity & Rewards",
    description:
      "Secure patient identity, verifiable consent, and engagement rewards powered by Solana infrastructure.",
    detail:
      "Secure patient identity, verifiable consent, and engagement rewards powered by Solana infrastructure.",
    icon: Apple,
    image: "/web3identityandrewards.png",
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
              Continuous Care Features
            </>
          }
          description="AI-powered engagement, monitoring, adherence, and preventive care — designed to keep patients connected beyond the clinic visit."
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

          {/* iPhone mockup — liquid glass frame */}
          <div className="relative mx-auto shrink-0" style={{ width: 296, height: 584 }}>

            {/* Outer glass frame */}
            <div
              className="absolute inset-0 rounded-[3.25rem]"
              style={{
                background: "linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 45%, #2a2a2c 100%)",
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.13),
                  0 30px 80px -10px rgba(0,0,0,0.75),
                  0 12px 32px -4px rgba(0,0,0,0.55),
                  inset 0 1.5px 0 rgba(255,255,255,0.18),
                  inset 0 -1px 0 rgba(0,0,0,0.4)
                `,
              }}
            />

            {/* Glass sheen on frame */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[3.25rem]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, transparent 45%, rgba(255,255,255,0.04) 100%)",
              }}
            />

            {/* Volume up */}
            <div
              className="absolute rounded-l-sm"
              style={{
                left: -5, top: 116, width: 4, height: 30,
                background: "linear-gradient(to right, #4a4a4c, #2c2c2e)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.5)",
              }}
            />
            {/* Volume down */}
            <div
              className="absolute rounded-l-sm"
              style={{
                left: -5, top: 158, width: 4, height: 30,
                background: "linear-gradient(to right, #4a4a4c, #2c2c2e)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.5)",
              }}
            />
            {/* Mute switch */}
            <div
              className="absolute rounded-l-sm"
              style={{
                left: -5, top: 82, width: 4, height: 22,
                background: "linear-gradient(to right, #4a4a4c, #2c2c2e)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.5)",
              }}
            />
            {/* Power button */}
            <div
              className="absolute rounded-r-sm"
              style={{
                right: -5, top: 130, width: 4, height: 56,
                background: "linear-gradient(to left, #4a4a4c, #2c2c2e)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(0,0,0,0.5)",
              }}
            />

            {/* Screen area */}
            <div
              className="absolute overflow-hidden"
              style={{
                inset: 11,
                borderRadius: "2.6rem",
                background: "#000",
              }}
            >
              {/* Dynamic Island */}
              <div
                className="absolute left-1/2 z-20 -translate-x-1/2"
                style={{
                  top: 10,
                  width: 110,
                  height: 32,
                  borderRadius: 20,
                  background: "#000",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />

              {/* Screen image */}
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
                    sizes="274px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Screen inner shadow for depth */}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  borderRadius: "2.6rem",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.35)",
                }}
              />
            </div>
          </div>

          {/* Right details + nav */}
          <div className="flex flex-col items-start gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <active.icon className="size-6" />
            </span>
            <h3 className="font-display text-3xl">{active.title}</h3>
            <p className="text-muted-foreground">{active.detail}</p>
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

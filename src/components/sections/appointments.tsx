"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  CalendarDays,
  Video,
  Stethoscope,
  MessageSquare,
  FileHeart,
  Network,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";

type TileColor = {
  gradient: string;
  icon: string;
  glow: string;
  ring: string;
  accent: string;
};

const TILE_COLORS: TileColor[] = [
  { gradient: "bg-linear-to-br from-blue-500/20 to-blue-600/5", icon: "text-blue-500", glow: "group-hover:bg-blue-500/10", ring: "ring-blue-500/20", accent: "bg-blue-500" },
  { gradient: "bg-linear-to-br from-violet-500/20 to-violet-600/5", icon: "text-violet-500", glow: "group-hover:bg-violet-500/10", ring: "ring-violet-500/20", accent: "bg-violet-500" },
  { gradient: "bg-linear-to-br from-emerald-500/20 to-emerald-600/5", icon: "text-emerald-500", glow: "group-hover:bg-emerald-500/10", ring: "ring-emerald-500/20", accent: "bg-emerald-500" },
  { gradient: "bg-linear-to-br from-amber-500/20 to-amber-600/5", icon: "text-amber-500", glow: "group-hover:bg-amber-500/10", ring: "ring-amber-500/20", accent: "bg-amber-500" },
  { gradient: "bg-linear-to-br from-rose-500/20 to-rose-600/5", icon: "text-rose-500", glow: "group-hover:bg-rose-500/10", ring: "ring-rose-500/20", accent: "bg-rose-500" },
  { gradient: "bg-linear-to-br from-indigo-500/20 to-indigo-600/5", icon: "text-indigo-500", glow: "group-hover:bg-indigo-500/10", ring: "ring-indigo-500/20", accent: "bg-indigo-500" },
];

type Tile = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  body: React.ReactNode;
  colorIdx: number;
};

const tiles: Tile[] = [
  {
    title: "Appointment Scheduling",
    description: "Book appointments with healthcare providers in seconds.",
    icon: CalendarDays,
    body: <CalendarMock />,
    colorIdx: 0,
  },
  {
    title: "Telemedicine",
    description: "Video consultations from anywhere.",
    icon: Video,
    body: <VideoMock />,
    colorIdx: 1,
  },
  {
    title: "Provider Directory",
    description: "Search a database of trusted specialists.",
    icon: Stethoscope,
    body: <SearchMock />,
    colorIdx: 2,
  },
  {
    title: "Secure Messaging",
    description: "Communicate securely with your care team.",
    icon: MessageSquare,
    body: <ChatMock />,
    colorIdx: 3,
  },
  {
    title: "Health Records",
    description: "View and manage personal health records.",
    icon: FileHeart,
    body: <RecordsMock />,
    colorIdx: 4,
  },
  {
    title: "Care Coordination",
    description: "Coordinate between multiple providers.",
    icon: Network,
    body: <TimelineMock />,
    colorIdx: 5,
  },
];

function TileCard({ tile }: { tile: Tile }) {
  const Icon = tile.icon;
  const c = TILE_COLORS[tile.colorIdx];
  return (
    <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-border/80 hover:shadow-lg">
      {/* Corner glow */}
      <div className={`pointer-events-none absolute -right-8 -top-8 size-28 rounded-full blur-2xl transition-all duration-500 opacity-0 ${c.glow} group-hover:opacity-100`} />
      {/* Subtle top accent line */}
      <div className={`absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${c.icon}`} />

      {/* Icon badge */}
      <div className="relative size-12 shrink-0">
        <div className={`absolute inset-0 rounded-2xl ${c.gradient}`} />
        <div className={`absolute inset-0 rounded-2xl ring-1 ring-inset ${c.ring}`} />
        <div className={`relative flex h-full items-center justify-center ${c.icon} transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="size-5" />
        </div>
      </div>

      <div>
        <h3 className="font-display text-2xl leading-tight">{tile.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tile.description}</p>
      </div>
      <div className="mt-auto min-h-0 flex-1 overflow-hidden">{tile.body}</div>
    </article>
  );
}

/**
 * A card that slides into the grid as the section is scrolled — row 1 drops in
 * from above the container, row 2 rises in from below it. (The container clips
 * the overshoot, so they appear to come "out of" the box edges.)
 */
function ConvergingCard({
  tile,
  index,
  progress,
}: {
  tile: Tile;
  index: number;
  progress: MotionValue<number>;
}) {
  const row = Math.floor(index / 3); // 0 (top) | 1 (bottom)
  const yDir = row === 0 ? -1 : 1; // top row from above, bottom row from below
  const SPREAD_Y = 480;

  // Each card converges over its own slice of the scroll — staggered by index
  const start = 0.12 + index * 0.045;
  const end = 0.6 + index * 0.045;

  const y = useTransform(progress, [start, end], [yDir * SPREAD_Y, 0]);
  const opacity = useTransform(progress, [start, start + 0.04], [0, 1]);
  const scale = useTransform(progress, [start, end], [0.92, 1]);

  return (
    // fixed (viewport-relative) height so two rows always fit inside the box,
    // never cropped by the pinned screen
    <motion.div
      style={{ y, opacity, scale }}
      className="h-[clamp(19rem,33vh,25rem)]"
    >
      <TileCard tile={tile} />
    </motion.div>
  );
}

export function Appointments() {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.0005,
  });

  // Heading: alone on screen first, then fades + drifts up as the cards arrive
  const headingOpacity = useTransform(p, [0, 0.04, 0.34, 0.44], [0, 1, 1, 0]);
  const headingY = useTransform(p, [0, 0.04, 0.12, 0.44], [24, 0, 0, -28]);
  const headingScale = useTransform(p, [0.12, 0.44], [1, 0.94]);

  // The box container fades + scales in as you start scrolling
  const boxOpacity = useTransform(p, [0.02, 0.14], [0, 1]);
  const boxScale = useTransform(p, [0.02, 0.16], [0.97, 1]);

  return (
    <>
      {/* ===================== Desktop: pinned scroll timeline ===================== */}
      <section
        id="features-appointments"
        ref={outerRef}
        className="relative hidden bg-background lg:block"
        style={{ height: "320vh" }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* soft glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_45%,var(--color-primary),transparent)]/8" />

          {/* The box container — cards live inside it and slide in past its clipped edges */}
          <Container>
            <motion.div
              style={{ opacity: boxOpacity, scale: boxScale }}
              className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary/30 p-4 sm:rounded-[2.5rem] sm:p-6 lg:p-8"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-5">
                {tiles.map((t, i) => (
                  <ConvergingCard key={t.title} tile={t} index={i} progress={p} />
                ))}
              </div>
            </motion.div>
          </Container>

          {/* Heading — on top, shown first */}
          <motion.div
            style={{ opacity: headingOpacity }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-8"
          >
            <motion.div
              style={{ y: headingY, scale: headingScale }}
              className="flex max-w-3xl flex-col items-center text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Features
              </span>
              <h2 className="mt-4 font-display text-balance text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                Appointment Management{" "}
                <span className="font-sans text-primary">&</span> Communication
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
                Easily schedule appointments, access virtual consultations, and
                stay in touch with healthcare providers.
              </p>
              <span className="mt-7 inline-flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
                <CalendarDays className="size-5" />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== Mobile: simple stacked grid ===================== */}
      <Section className="bg-background lg:hidden">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Appointment Management{" "}
                <span className="font-sans text-primary">&</span> Communication
              </>
            }
            description="Easily schedule appointments, access virtual consultations, and stay in touch with healthcare providers."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.08)}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {tiles.map((t) => (
              <motion.div key={t.title} variants={fadeUp} className="h-full">
                <TileCard tile={t} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}

/* ============ Tiny mock UIs ============ */

function CalendarMock() {
  const days = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  const booked = [5, 18];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="bg-linear-to-r from-blue-500/10 to-blue-600/5 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-blue-500/15">
            <CalendarDays className="size-3 text-blue-500" />
          </span>
          <span className="text-xs font-semibold text-foreground">June 2024</span>
        </div>
        <div className="flex gap-1">
          <span className="flex size-6 items-center justify-center rounded-lg text-xs text-muted-foreground hover:bg-muted">‹</span>
          <span className="flex size-6 items-center justify-center rounded-lg text-xs text-muted-foreground hover:bg-muted">›</span>
        </div>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-7 gap-x-0 gap-y-1 text-center text-[10px]">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <span key={d} className="pb-1.5 font-medium text-muted-foreground/50">{d}</span>
          ))}
          {days.map((d, i) => (
            <span
              key={i}
              className={`mx-auto flex size-6 items-center justify-center rounded-full text-[11px] ${
                d === 0 ? "" :
                d === 12 ? "bg-blue-500 font-semibold text-white shadow-sm shadow-blue-500/30" :
                booked.includes(d) ? "relative font-medium text-blue-500 after:absolute after:bottom-0 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-blue-500" :
                "font-medium text-foreground/70"
              }`}
            >
              {d > 0 ? d : ""}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-blue-500/8 px-3 py-2">
          <span className="size-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
          <span className="text-[10px] font-medium text-blue-500">Dr. Patel · 2:30 PM</span>
        </div>
      </div>
    </div>
  );
}

function VideoMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {/* Video feed area */}
      <div className="relative bg-linear-to-br from-violet-900/40 to-slate-900/60 dark:from-violet-950/60 dark:to-slate-950/80" style={{ height: 120 }}>
        {/* Patient tile */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative">
              <div className="size-12 rounded-full bg-linear-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-sm font-bold shadow-lg">AP</div>
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-green-400 ring-2 ring-card" />
            </div>
            <div className="h-1.5 w-16 rounded bg-white/10" />
          </div>
        </div>
        {/* Self-view pip */}
        <div className="absolute bottom-2 right-2 size-10 rounded-xl bg-linear-to-br from-zinc-600 to-zinc-800 ring-1 ring-white/20 flex items-center justify-center text-[9px] font-bold text-white/70">ME</div>
        {/* Live badge */}
        <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm">
          <span className="size-1.5 animate-pulse rounded-full bg-red-400" />
          <span className="text-[9px] font-semibold text-white">LIVE · 16:08</span>
        </div>
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-2.5 px-4 py-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" /></svg>
        </span>
        <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
          <Video className="size-3.5" />
        </span>
        <span className="flex size-9 items-center justify-center rounded-full bg-red-500 text-white shadow-sm shadow-red-500/30">
          <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
        </span>
        <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
        </span>
      </div>
    </div>
  );
}

function SearchMock() {
  const doctors = [
    { name: "Dr. James Lee", role: "Physical Therapy", avatar: "from-sky-400 to-sky-600", rating: 4.9, available: true },
    { name: "Dr. Ava Patel", role: "Gastroenterology", avatar: "from-emerald-400 to-emerald-600", rating: 4.8, available: true },
    { name: "Dr. William A.", role: "Cardiology", avatar: "from-rose-400 to-rose-600", rating: 4.7, available: false },
  ];
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-2">
        <svg className="size-3.5 shrink-0 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
        <span className="text-xs text-muted-foreground">Find a specialist...</span>
      </div>
      <div className="space-y-1.5">
        {doctors.map((d) => (
          <div key={d.name} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/5">
            <span className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${d.avatar} text-[9px] font-bold text-white shadow-sm`}>
              {d.name.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold">{d.name}</p>
              <p className="truncate text-[10px] text-muted-foreground">{d.role}</p>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-[10px] font-semibold text-amber-500">★ {d.rating}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${d.available ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>
                {d.available ? "Available" : "Busy"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="space-y-3">
      {/* Received */}
      <div className="flex items-end gap-2">
        <span className="mb-4 flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-[9px] font-bold text-white shadow-sm">D</span>
        <div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-[11px] leading-relaxed text-foreground">
            Good morning! How are you feeling today?
          </div>
          <p className="mt-1 text-[9px] text-muted-foreground">9:00 AM</p>
        </div>
      </div>
      {/* Sent */}
      <div className="flex items-end justify-end gap-2">
        <div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-amber-500 px-3 py-2 text-[11px] leading-relaxed text-white shadow-sm shadow-amber-500/20">
            I&apos;ve been experiencing some chest pain. Should I be concerned?
          </div>
          <div className="mt-1 flex items-center justify-end gap-1">
            <p className="text-[9px] text-muted-foreground">12:00 PM</p>
            <svg className="size-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24"><path d="M18 7l-8 8-4-4 1.4-1.4L10 12.2l6.6-6.6L18 7zm2 0l-9 9-1-1 1.4-1.4L11 14.2l7.6-7.6L20 7z" /></svg>
          </div>
        </div>
        <span className="mb-5 flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-blue-600 text-[9px] font-bold text-white shadow-sm">Y</span>
      </div>
      {/* Typing indicator */}
      <div className="flex items-end gap-2">
        <span className="mb-4 flex size-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-[9px] font-bold text-white shadow-sm">D</span>
        <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-secondary px-3 py-2.5">
          <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "0ms" }} />
          <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "150ms" }} />
          <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

function RecordsMock() {
  const metrics = [
    { label: "Heart Rate", value: "72", unit: "bpm", status: "good", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Blood Pressure", value: "120/80", unit: "mmHg", status: "normal", color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Blood Glucose", value: "90", unit: "mg/dL", status: "good", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "BMI", value: "25.1", unit: "", status: "normal", color: "text-amber-500", bg: "bg-amber-500/10" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="bg-linear-to-r from-rose-500/10 to-rose-600/5 px-4 py-2.5 flex items-center gap-2">
        <span className="flex size-5 items-center justify-center rounded-md bg-rose-500/15">
          <FileHeart className="size-3 text-rose-500" />
        </span>
        <span className="text-xs font-semibold">Health Records</span>
        <span className="ml-auto rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">Updated</span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {metrics.map((m) => (
          <div key={m.label} className={`rounded-xl ${m.bg} p-2.5`}>
            <p className="text-[9px] font-medium text-muted-foreground">{m.label}</p>
            <p className={`mt-0.5 text-sm font-bold ${m.color}`}>{m.value} <span className="text-[9px] font-normal text-muted-foreground">{m.unit}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineMock() {
  const providers = [
    { name: "Dr. Sarah Chen", role: "Primary Care", avatar: "from-indigo-400 to-indigo-600", status: "Active" },
    { name: "Dr. Mark Rivera", role: "Cardiologist", avatar: "from-violet-400 to-violet-600", status: "Referred" },
    { name: "Nurse Julie K.", role: "Care Navigator", avatar: "from-teal-400 to-teal-600", status: "Support" },
  ];
  const events = [
    { label: "Labs reviewed", when: "Today", dot: "bg-indigo-500" },
    { label: "Referral sent", when: "2d ago", dot: "bg-violet-500" },
  ];
  return (
    <div className="space-y-2.5">
      <div className="flex -space-x-2">
        {providers.map((p) => (
          <span key={p.name} title={`${p.name} · ${p.role}`} className={`flex size-8 items-center justify-center rounded-full bg-linear-to-br ${p.avatar} text-[9px] font-bold text-white ring-2 ring-card shadow-sm`}>
            {p.name.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
          </span>
        ))}
        <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-[9px] font-semibold text-muted-foreground ring-2 ring-card">+4</span>
      </div>
      <div className="relative pl-3">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/60 to-indigo-500/0" />
        {events.map((e) => (
          <div key={e.label} className="relative mb-2 flex items-start gap-2.5 pl-3">
            <span className={`absolute -left-1 mt-1 size-2 rounded-full ${e.dot} ring-2 ring-card`} />
            <div>
              <p className="text-xs font-medium text-foreground">{e.label}</p>
              <p className="text-[10px] text-muted-foreground">{e.when}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

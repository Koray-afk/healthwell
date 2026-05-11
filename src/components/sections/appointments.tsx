"use client";

import { motion } from "framer-motion";
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
import { stagger, viewport } from "@/lib/motion";

const tileVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(6px)",
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const mockVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const tiles = [
  {
    title: "Appointment Scheduling",
    description: "Book appointments with healthcare providers in seconds.",
    icon: CalendarDays,
    body: <CalendarMock />,
  },
  {
    title: "Telemedicine",
    description: "Video consultations from anywhere.",
    icon: Video,
    body: <VideoMock />,
  },
  {
    title: "Provider Directory",
    description: "Search a database of trusted specialists.",
    icon: Stethoscope,
    body: <SearchMock />,
  },
  {
    title: "Secure Messaging",
    description: "Communicate securely with your care team.",
    icon: MessageSquare,
    body: <ChatMock />,
  },
  {
    title: "Health Records",
    description: "View and manage personal health records.",
    icon: FileHeart,
    body: <RecordsMock />,
  },
  {
    title: "Care Coordination",
    description: "Coordinate between multiple providers.",
    icon: Network,
    body: <TimelineMock />,
  },
];

export function Appointments() {
  return (
    <Section id="features-appointments">
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

        <div className="mt-14 overflow-hidden rounded-[2.5rem] bg-dark-section p-4 sm:p-6 lg:p-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.04, 0.08)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tiles.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.article
                  key={t.title}
                  custom={i}
                  variants={tileVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-dark-section-border bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/[0.06]" />

                  <div className="flex items-start justify-between">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
                      className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110"
                    >
                      <Icon className="size-5" />
                    </motion.span>
                  </div>
                  <motion.div variants={mockVariants}>
                    <h3 className="font-display text-2xl">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                  </motion.div>
                  <motion.div variants={mockVariants} className="mt-2 flex-1">
                    {t.body}
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

/* ============ Tiny mock UIs ============ */

function CalendarMock() {
  const days = [
    0, 0, 0, 0, 0, 0, 1,
    2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22,
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <CalendarDays className="size-3.5 text-muted-foreground" />
          June 2024
        </div>
        <div className="flex gap-1">
          <span className="flex size-6 items-center justify-center rounded-lg text-xs text-muted-foreground hover:bg-muted">‹</span>
          <span className="flex size-6 items-center justify-center rounded-lg text-xs text-muted-foreground hover:bg-muted">›</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-x-0 gap-y-1 text-center text-[10px]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <span key={d} className="pb-2 font-medium text-muted-foreground/60">
            {d}
          </span>
        ))}
        {days.map((d, i) => (
          <span
            key={i}
            className={`flex size-7 items-center justify-center rounded-full text-[11px] ${
              d === 0
                ? ""
                : d === 12
                  ? "bg-primary font-semibold text-white dark:text-primary-foreground"
                  : d === 5
                    ? "relative font-medium text-foreground after:absolute after:bottom-0.5 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary"
                    : "font-medium text-foreground/80"
            }`}
          >
            {d > 0 ? d : ""}
          </span>
        ))}
      </div>
    </div>
  );
}

function VideoMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 to-primary/30 dark:from-primary/10 dark:to-primary/20">
      <div className="flex h-36 items-center justify-center">
        <div className="flex flex-col items-center gap-1">
          <div className="size-16 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-400" />
          <div className="mt-1 h-2 w-12 rounded bg-foreground/10" />
          <div className="h-1.5 w-20 rounded bg-foreground/8" />
        </div>
      </div>
      <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-foreground/50 px-2.5 py-1">
        <span className="size-2 animate-pulse rounded-full bg-red-500" />
        <span className="text-[10px] font-medium text-background">00:16:08</span>
      </div>
      <div className="flex items-center justify-center gap-3 border-t border-border bg-card/60 px-4 py-2.5 backdrop-blur-sm">
        <span className="flex size-8 items-center justify-center rounded-full bg-card text-muted-foreground shadow-sm">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
        </span>
        <span className="flex size-8 items-center justify-center rounded-full bg-card text-muted-foreground shadow-sm">
          <Video className="size-3.5" />
        </span>
        <span className="flex size-10 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
        </span>
        <span className="flex size-8 items-center justify-center rounded-full bg-card text-muted-foreground shadow-sm">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
        </span>
        <span className="flex size-8 items-center justify-center rounded-full bg-card text-muted-foreground shadow-sm">
          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
        </span>
      </div>
    </div>
  );
}

function SearchMock() {
  const doctors = [
    { name: "Dr. James Lee", role: "Physical Therapist", color: "bg-zinc-400" },
    { name: "Dr. Ava Patel", role: "Gastroenterologist", color: "bg-zinc-500" },
    { name: "Dr. William A.", role: "Cardiologist", color: "bg-zinc-600" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2">
        <svg className="size-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <span className="text-xs text-muted-foreground">Search a specialist...</span>
      </div>
      <div className="space-y-2">
        {doctors.map((d) => (
          <div key={d.name} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2">
            <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${d.color} text-[10px] font-bold text-white`}>
              {d.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">{d.name}</p>
              <p className="truncate text-[10px] text-muted-foreground">{d.role}</p>
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
      <div className="flex items-end justify-end gap-2">
        <div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-xs leading-relaxed text-white dark:text-primary-foreground">
            Hi Dr. Thompson, I&apos;ve been experiencing chest pain recently. Should I be concerned?
          </div>
          <p className="mt-1 text-right text-[9px] text-muted-foreground">12:00 PM</p>
        </div>
        <span className="mb-5 flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[9px] font-bold text-primary dark:bg-primary/20">Y</span>
      </div>
      <div className="flex items-end gap-2">
        <span className="mb-5 flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[9px] font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">D</span>
        <div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-card px-3.5 py-2.5 text-xs leading-relaxed text-foreground shadow-sm ring-1 ring-border">
            Hello, let&apos;s schedule some tests to determine the cause and ensure everything is okay.
          </div>
          <p className="mt-1 text-[9px] text-muted-foreground">12:05 PM</p>
        </div>
      </div>
    </div>
  );
}

function RecordsMock() {
  const rows = [
    ["Height", "5'10\" (178 cm)"],
    ["Weight", "175 lbs (79 kg)"],
    ["BMI", "25.1"],
    ["Blood Pressure", "120/80 mmHg"],
    ["Heart Rate", "72 bpm"],
    ["Blood Glucose", "90 mg/dL"],
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <FileHeart className="size-3.5 text-emerald-500" />
          Health Metrics
        </div>
        <svg className="size-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[11px]">
        {rows.map(([k, v]) => (
          <div key={k}>
            <p className="text-muted-foreground">{k}</p>
            <p className="font-semibold text-foreground">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineMock() {
  const items = [
    { title: "Initial Consultation", date: "January 5, 2023" },
    { title: "Blood Test Results", date: "January 12, 2023" },
  ];
  return (
    <div className="flex flex-col items-center gap-2">
      {items.map((it, i) => (
        <div key={it.title} className="flex flex-col items-center">
          <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Stethoscope className="size-3.5 text-primary" />
            </span>
            <div>
              <p className="text-xs font-semibold">{it.title}</p>
              <p className="text-[10px] text-muted-foreground">{it.date}</p>
            </div>
          </div>
          {i < items.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="h-4 w-px bg-border" />
              <svg className="size-3 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

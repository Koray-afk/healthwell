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
import { fadeUp, stagger, viewport } from "@/lib/motion";

const tiles = [
  {
    title: "Appointment Scheduling",
    description: "Book appointments with healthcare providers in seconds.",
    icon: CalendarDays,
    span: "lg:col-span-2",
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
    span: "lg:col-span-2",
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
    span: "lg:col-span-2",
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
              <span className="italic text-primary">&</span> Communication
            </>
          }
          description="Easily schedule appointments, access virtual consultations, and stay in touch with healthcare providers."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.06)}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {tiles.map((t) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={t.title}
                variants={fadeUp}
                className={`group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${t.span ?? ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                </div>
                <div className="mt-2 flex-1">{t.body}</div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}

/* ============ Tiny mock UIs ============ */

function CalendarMock() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>June 2024</span>
        <span>›</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="text-muted-foreground/70">
            {d}
          </span>
        ))}
        {days.map((d) => (
          <span
            key={d}
            className={`rounded-md py-1 ${d === 12 ? "bg-primary text-primary-foreground" : "text-foreground/80"}`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function VideoMock() {
  return (
    <div className="relative h-32 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 to-accent">
      <div className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] text-white">
        00:16:08
      </div>
      <div className="absolute bottom-2 left-2 size-10 rounded-lg bg-background/90 ring-1 ring-border" />
    </div>
  );
}

function SearchMock() {
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-3">
      <div className="rounded-lg bg-background px-3 py-2 text-xs text-muted-foreground">
        Search a specialist…
      </div>
      <ul className="mt-3 space-y-2 text-xs">
        {["Cardiologist", "Dermatologist", "Nutritionist"].map((s) => (
          <li key={s} className="flex items-center gap-2">
            <span className="size-6 rounded-full bg-primary/20" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="space-y-2">
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-primary-foreground">
        Hi Dr. Thompson, I’ve been experiencing chest pain. Should I be concerned?
      </div>
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-xs text-secondary-foreground">
        Hello — let’s schedule some tests to determine the cause.
      </div>
    </div>
  );
}

function RecordsMock() {
  const rows = [
    ["Height", "5'10\""],
    ["Weight", "175 lbs"],
    ["BMI", "25.1"],
    ["Heart Rate", "72 bpm"],
  ];
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-4 text-xs">
      <ul className="grid grid-cols-2 gap-2">
        {rows.map(([k, v]) => (
          <li key={k} className="flex items-center justify-between rounded-lg bg-background px-2 py-1.5">
            <span className="text-muted-foreground">{k}</span>
            <span className="font-medium">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineMock() {
  const items = [
    "Initial Consultation",
    "Blood Test Results",
    "Cardiology Consultation",
    "Telemedicine Visit",
  ];
  return (
    <ol className="relative space-y-3 border-l border-border pl-4 text-xs">
      {items.map((it, i) => (
        <li key={it} className="relative">
          <span className="absolute -left-[21px] top-1 size-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
          <p className="font-medium">{it}</p>
          <p className="text-muted-foreground">2024 · 0{i + 1}/15</p>
        </li>
      ))}
    </ol>
  );
}

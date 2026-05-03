"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CalendarCheck,
  Heart,
  Stethoscope,
  Apple,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export function AppShowcase() {
  return (
    <Section id="app" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Mobile App"
              title={
                <>
                  Download <span className="italic text-primary">the App</span>
                </>
              }
              description="Take HealthWell with you. Track vitals, book appointments, and stay connected with your care team — anywhere."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                <Download />
                App Store
              </Button>
              <Button size="lg" variant="outline">
                <Download />
                Google Play
              </Button>
            </div>
          </div>

          {/* Phone with floating cards */}
          <div className="relative mx-auto h-[600px] w-full max-w-md">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[3rem] border-[10px] border-foreground/90 bg-foreground/90 shadow-2xl">
              <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-foreground" />
              <div className="relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-secondary to-accent p-4 pt-10">
                <div className="flex items-center gap-3 rounded-2xl bg-background/90 p-3 shadow-sm">
                  <span className="size-9 rounded-full bg-primary/20" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold">Hi Dexter!</p>
                    <p className="text-[10px] text-muted-foreground">
                      How is your day?
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Heart, label: "Heart", value: "72 bpm" },
                    { icon: Activity, label: "Steps", value: "8,420" },
                    { icon: Apple, label: "Calories", value: "1,840" },
                    { icon: Stethoscope, label: "BP", value: "120/80" },
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={m.label}
                        className="rounded-2xl bg-background/90 p-3 shadow-sm"
                      >
                        <Icon className="mb-2 size-4 text-primary" />
                        <p className="text-[10px] text-muted-foreground">
                          {m.label}
                        </p>
                        <p className="text-sm font-semibold">{m.value}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-2xl bg-background/90 p-3 shadow-sm">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Upcoming
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Nutritionist Appointment
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Jun 12 — 02:30 PM · Dr. Sarah Thompson
                  </p>
                </div>
                <div className="mt-auto flex justify-around rounded-2xl bg-background/90 p-3 text-muted-foreground">
                  {[Heart, Activity, CalendarCheck, Stethoscope].map((I, i) => (
                    <I key={i} className="size-4" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-12 hidden rounded-2xl border border-border bg-background p-3 shadow-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Heart rate
              </p>
              <p className="font-display text-2xl text-primary">72 bpm</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-24 hidden rounded-2xl border border-border bg-background p-3 shadow-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Steps today
              </p>
              <p className="font-display text-2xl">8,420</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

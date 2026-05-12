"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "What is Wizzaid and how does it work?",
    a: "Wizzaid is a comprehensive healthcare app designed to help you manage your health and wellness. It offers features like health education, community forums, wellness challenges, appointment scheduling, and telemedicine consultations. Sign up, choose your plan, and start exploring tools tailored to your needs.",
  },
  {
    q: "How do I schedule an appointment through Wizzaid?",
    a: "Open the Appointments tab, choose your provider, pick an available time slot, and confirm. You'll receive reminders by email and push notification.",
  },
  {
    q: "Is my health data secure with Wizzaid?",
    a: "Yes — all data is encrypted in transit and at rest. We follow industry-standard security practices and you control sharing per provider.",
  },
  {
    q: "Can I access Wizzaid on multiple devices?",
    a: "Absolutely. Sign in on web, iOS, and Android — your data syncs in real time.",
  },
  {
    q: "What kind of support does Wizzaid offer?",
    a: "Email support on all plans, priority chat on Premium, and 24/7 VIP support on Elite.",
  },
  {
    q: "How can I join wellness challenges?",
    a: "Browse the Challenges tab, pick one that matches your goal, and invite friends to keep each other accountable.",
  },
  {
    q: "What are the benefits of the Premium and Elite plans?",
    a: "Premium unlocks unlimited telemedicine, advanced analytics, and priority scheduling. Elite adds 1-on-1 coaching, family accounts, and VIP support.",
  },
  {
    q: "How do I get personalized health recommendations?",
    a: "Complete your health profile and connect any wearables — our engine surfaces tips and programs tailored to you.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-16">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-medium text-primary">FAQ</span>
            <h2 className="mt-4 font-display text-balance text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Help <span className="italic text-primary">&</span> Information
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-base text-muted-foreground sm:text-lg">
              Whether you&apos;re exploring features, understanding pricing, or
              figuring out how to get started, we&apos;re here to help with clear
              and concise answers.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="space-y-2.5">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border transition-colors",
                    isOpen
                      ? "border-border bg-secondary/40"
                      : "border-border/60 hover:bg-secondary/20",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="mt-0.5 shrink-0 text-muted-foreground">
                      {isOpen ? (
                        <Minus className="size-5" />
                      ) : (
                        <Plus className="size-5" />
                      )}
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-base sm:text-lg",
                        isOpen ? "font-medium text-foreground" : "text-foreground/85",
                      )}
                    >
                      {it.q}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-14 pr-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

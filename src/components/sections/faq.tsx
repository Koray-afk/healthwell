"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "What is HealthWell and how does it work?",
    a: "HealthWell is a comprehensive healthcare app designed to help you manage your health and wellness. It offers features like health education, community forums, wellness challenges, appointment scheduling, and telemedicine consultations. Sign up, choose your plan, and start exploring tools tailored to your needs.",
  },
  {
    q: "How do I schedule an appointment through HealthWell?",
    a: "Open the Appointments tab, choose your provider, pick an available time slot, and confirm. You'll receive reminders by email and push notification.",
  },
  {
    q: "Is my health data secure with HealthWell?",
    a: "Yes — all data is encrypted in transit and at rest. We follow industry-standard security practices and you control sharing per provider.",
  },
  {
    q: "Can I access HealthWell on multiple devices?",
    a: "Absolutely. Sign in on web, iOS, and Android — your data syncs in real time.",
  },
  {
    q: "What kind of support does HealthWell offer?",
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
    <Section id="faq">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Help <span className="italic text-primary">&</span> Information
            </>
          }
          description="Whether you're exploring features, understanding pricing, or figuring out how to get started, we’re here to help."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 p-5 text-left"
                >
                  <span className="font-medium">{it.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "inline-flex size-8 shrink-0 items-center justify-center rounded-full border",
                      isOpen
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border text-muted-foreground",
                    )}
                  >
                    <Plus className="size-4" />
                  </motion.span>
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
                      <p className="px-5 pb-5 pr-16 text-sm text-muted-foreground">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

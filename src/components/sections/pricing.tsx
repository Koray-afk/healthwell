"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    monthly: 12,
    yearly: 8.4,
    features: [
      "Health Education Modules",
      "Community Forums",
      "Basic Wellness Challenges",
      "Monthly Personalized Tips",
      "Basic Appointment Scheduling",
      "Provider Directory",
      "Secure Messaging",
      "Limited Health Records Access",
    ],
  },
  {
    name: "Premium",
    monthly: 22,
    yearly: 15.4,
    popular: true,
    features: [
      "All Basic Plan Features",
      "Advanced Wellness Challenges",
      "Comprehensive Health Tracking",
      "Unlimited Telemedicine",
      "Detailed Reports & Analytics",
      "Priority Appointment Scheduling",
      "Custom Health Tips",
      "Personalized Wellness Programs",
    ],
  },
  {
    name: "Elite",
    monthly: 32,
    yearly: 22.4,
    features: [
      "All Premium Plan Features",
      "1-on-1 Health Coaching",
      "Advanced Care Coordination",
      "Specialist Directories",
      "VIP Support",
      "Early Access to New Features",
      "Family Account Integration",
      "Enhanced Security",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <Section id="pricing" className="bg-secondary/30">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Invest in <span className="italic text-primary">Your Health</span>
            </>
          }
          description="Choose a plan that grows with your wellness journey. Save 30% with yearly billing."
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={cn("text-sm", !yearly ? "font-medium" : "text-muted-foreground")}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={() => setYearly((v) => !v)}
            className={cn(
              "relative h-7 w-12 rounded-full border border-border transition-colors",
              yearly ? "bg-primary" : "bg-background",
            )}
          >
            <motion.span
              animate={{ x: yearly ? 22 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={cn(
                "absolute top-[2px] inline-block size-5 rounded-full bg-background shadow",
                yearly && "bg-primary-foreground",
              )}
            />
          </button>
          <span className={cn("text-sm", yearly ? "font-medium" : "text-muted-foreground")}>
            Yearly
          </span>
          <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
            Save 30%
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <article
                key={plan.name}
                className={cn(
                  "relative flex flex-col gap-6 rounded-3xl border bg-card p-8 transition-all",
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 lg:scale-[1.02]"
                    : "border-border",
                )}
              >
                {plan.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </span>
                ) : null}

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {plan.name}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl text-muted-foreground line-through">
                      ${(yearly ? plan.monthly : plan.monthly * 1.4).toFixed(0)}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.name}-${yearly}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="font-display text-5xl"
                      >
                        ${price.toFixed(2)}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm text-muted-foreground">
                      /month, paid {yearly ? "yearly" : "monthly"}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/sign-up">Get this Plan</Link>
                </Button>

                <ul className="flex flex-col gap-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

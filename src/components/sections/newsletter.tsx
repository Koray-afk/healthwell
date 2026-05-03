"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [done, setDone] = React.useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !agreed) return;
    setDone(true);
    setEmail("");
    setAgreed(false);
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <Section id="newsletter">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium uppercase tracking-widest">
                Newsletter
              </span>
              <h2 className="font-display mt-4 text-balance text-4xl leading-tight sm:text-5xl">
                Subscribe to{" "}
                <span className="italic">Our Newsletter</span>
              </h2>
              <p className="mt-4 max-w-md text-pretty text-primary-foreground/85">
                Stay updated with the latest health tips, wellness insights, and
                exclusive offers. Join our community and receive personalized
                content delivered to your inbox.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 rounded-2xl bg-background/95 p-4 text-foreground shadow-xl sm:p-5"
            >
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Your email
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
                />
                <Button type="submit" size="lg" disabled={done}>
                  {done ? (
                    <>
                      <Check />
                      Subscribed
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight />
                    </>
                  )}
                </Button>
              </div>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 size-4 rounded border-border accent-primary"
                />
                <span>
                  I agree with HealthWell{" "}
                  <a href="/privacy-policy" className="underline">
                    Policies
                  </a>
                  .
                </span>
              </label>
            </form>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

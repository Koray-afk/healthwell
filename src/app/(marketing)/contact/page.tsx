"use client";

import * as React from "react";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export default function ContactPage() {
  const [done, setDone] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
    e.currentTarget.reset();
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let’s <span className="italic text-primary">talk</span>
              </>
            }
            description="Questions, partnerships, or feedback — we read every message."
          />
        </Container>
      </Section>

      <Section className="pt-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Doe" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <Field label="Subject" name="subject" placeholder="How can we help?" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us a little more…"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
                />
              </div>
              <div>
                <Button type="submit" size="lg" disabled={done}>
                  {done ? (
                    <>
                      <Check />
                      Message sent
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="flex flex-col gap-4">
              <ContactCard
                icon={Mail}
                title="Email"
                  lines={["hello@wizzaid.app", "support@wizzaid.app"]}
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                lines={["+1 (415) 555-0142", "Mon–Fri · 9am–6pm PT"]}
              />
              <ContactCard
                icon={MapPin}
                title="Headquarters"
                lines={["1 Wellness Way", "San Francisco, CA 94110"]}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="font-display text-xl">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

const items = [
  {
    quote:
      "Wizzaid has transformed how I manage my health. The appointment scheduling feature is a lifesaver!",
    name: "John Smith",
    role: "Software Engineer",
    avatar:
      "https://framerusercontent.com/images/LFnQXh6srumwVVF4HWEycyIuG0Q.png",
  },
  {
    quote:
      "With Wizzaid, I can track my medication easily. It has improved my adherence significantly.",
    name: "Sarah Johnson",
    role: "Teacher",
    avatar:
      "https://framerusercontent.com/images/rIRLprwNdsjH8v6vKiovBVtDDUI.png",
  },
  {
    quote:
      "The telemedicine consultations on Wizzaid saved me so much time and hassle. Highly recommend!",
    name: "Michael Brown",
    role: "Entrepreneur",
    avatar:
      "https://framerusercontent.com/images/4wjZwfbCu9WSrGLaPidnqyFVOiY.png",
  },
  {
    quote:
      "I love the community support. It’s comforting to connect with others on similar health journeys.",
    name: "Emily Davis",
    role: "Marketing Specialist",
    avatar: "https://framerusercontent.com/images/UTixYtYPsd5TN5Kmj8fqigwo.png",
  },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Voices of <span className="italic text-primary">Wellness</span>
            </>
          }
          description="Dive into the inspiring stories of our thriving community."
        />
      </Container>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex w-max gap-4 px-4"
        >
          {loop.map((it, i) => (
            <article
              key={i}
              className="flex w-[340px] shrink-0 flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm sm:w-[400px]"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="text-pretty text-sm leading-relaxed text-foreground/90">
                “{it.quote}”
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="relative size-10 overflow-hidden rounded-full">
                  <Image src={it.avatar} alt="" fill sizes="40px" className="object-cover" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{it.name}</p>
                  <p className="text-xs text-muted-foreground">{it.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

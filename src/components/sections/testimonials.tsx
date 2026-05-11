"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

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
      "I love the community support. It's comforting to connect with others on similar health journeys.",
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
        <div className="overflow-hidden rounded-[2.5rem] bg-[#09090b] px-8 py-14 sm:px-12 sm:py-20">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[rgba(255,255,255,0.7)]">
              Testimonials
            </span>
            <h2 className="font-display text-balance text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Voices of <span className="italic text-[#3b82f6]">Wellness</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-base text-[rgba(255,255,255,0.55)] sm:text-lg">
              Dive into the inspiring stories of our thriving community.
            </p>
          </div>

          {/* Marquee */}
          <div className="relative mt-14 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#09090b] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#09090b] to-transparent" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex w-max gap-4 px-4"
            >
              {loop.map((it, i) => (
                <article
                  key={i}
                  className="flex w-[340px] shrink-0 flex-col gap-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 sm:w-[400px]"
                >
                  <div className="flex gap-1 text-[#3b82f6]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="size-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-pretty text-sm leading-relaxed text-[rgba(255,255,255,0.85)]">
                    &ldquo;{it.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3">
                    <span className="relative size-10 overflow-hidden rounded-full">
                      <Image src={it.avatar} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{it.name}</p>
                      <p className="text-xs text-[rgba(255,255,255,0.5)]">{it.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

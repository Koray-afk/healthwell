"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeUp, stagger } from "@/lib/motion";

const avatars = [
  "https://framerusercontent.com/images/4wjZwfbCu9WSrGLaPidnqyFVOiY.png",
  "https://framerusercontent.com/images/UTixYtYPsd5TN5Kmj8fqigwo.png",
  "https://framerusercontent.com/images/LFnQXh6srumwVVF4HWEycyIuG0Q.png",
  "https://framerusercontent.com/images/rIRLprwNdsjH8v6vKiovBVtDDUI.png",
];

const integrations = [
  { label: "Google Health Connect" },
  { label: "Ultrahuman" },
  { label: "Fitbit", soon: true },
  { label: "Coros", soon: true },
  { label: "Xiaomi", soon: true },
  { label: "Whoop" },
  { label: "Garmin" },
  { label: "Oura" },
  { label: "Apple Health" },
  { label: "Strava" },
  { label: "Polar" },
  { label: "Suunto" },
  { label: "Samsung Health" },
];


export function Hero() {
  return (
    <section className="relative overflow-hidden pb-0 pt-16 sm:pt-20 lg:pt-24">
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent),transparent_70%)] opacity-60 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,var(--primary),transparent_70%)] opacity-20 blur-3xl" />
        {/* Extra floating orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-[radial-gradient(closest-side,#3b82f6,transparent_70%)] opacity-10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute right-[15%] top-[30%] h-56 w-56 rounded-full bg-[radial-gradient(closest-side,#8b5cf6,transparent_70%)] opacity-10 blur-3xl"
        />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="flex flex-col items-center text-center"
        >
          {/* Pill badge */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="size-3.5" />
            Empowering well-being, one habit at a time
          </motion.span>

          {/* Headline with mixed weight + gradient */}
          <motion.h1
            variants={fadeUp}
            className="font-display mt-8 text-balance text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="text-foreground">Improve Your Health</span>{" "}
            <span className="italic text-primary/70">with</span>{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-primary via-[#6366f1] to-primary bg-clip-text text-transparent">
              Wizzaid
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Wizzaid simplifies your healthcare experience, putting you in
            control of your well-being. Take the first step toward a healthier,
            happier life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/20">
              <Link href="/sign-up">
                Get Started
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7">
              <Link href="/features">Find More</Link>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <span
                  key={src}
                  className="relative inline-block size-9 overflow-hidden rounded-full border-2 border-background shadow-sm"
                  style={{ zIndex: avatars.length - i }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <span>
              <span className="font-semibold text-foreground">+1.8M</span>{" "}
              happy clients use Wizzaid® daily
            </span>
          </motion.div>
        </motion.div>
      </Container>

      {/* === Integration marquee — floating dark pills === */}
      <Container className="mt-16">
        <div className="relative overflow-hidden py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="flex w-max gap-3"
        >
          {[...integrations, ...integrations].map((item, index) => (
            <span
              key={`${item.label}-${index}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#09090b] px-5 py-2 text-sm font-medium text-white"
            >
              {item.label}
              {item.soon ? (
                <span className="text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)]">
                  soon
                </span>
              ) : null}
            </span>
          ))}
        </motion.div>
        </div>
      </Container>
    </section>
  );
}

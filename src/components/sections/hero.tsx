"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const collage = [
  {
    src: "https://framerusercontent.com/images/rTCecVJvlUX4vk5N62cZegy9A.png",
    alt: "Woman doing yoga",
    className:
      "col-span-2 aspect-[3/4] rotate-[-3deg] translate-y-2",
  },
  {
    src: "https://framerusercontent.com/images/SJeYfmDXTnQ78kAjryUb3BRTfCM.png",
    alt: "Oranges falling into water",
    className: "aspect-[3/4] rotate-[2deg] -translate-y-3",
  },
  {
    src: "https://framerusercontent.com/images/gKM8NHPF6nUIuVZAxt5Z3WTWk4M.png",
    alt: "Happy woman in white t-shirt",
    className: "aspect-[3/4] rotate-[-1deg]",
  },
  {
    src: "https://framerusercontent.com/images/p3oPxuTOfbFzdz8u2rijPvMDk7A.png",
    alt: "Man doing sport on stairs",
    className: "aspect-[3/4] rotate-[3deg] translate-y-4",
  },
];

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
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20 lg:pb-32 lg:pt-24">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--accent),transparent_70%)] opacity-60 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,var(--primary),transparent_70%)] opacity-20 blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-secondary-foreground shadow-sm"
          >
            <Sparkles className="size-3.5 text-primary" />
            Empowering well-being, one habit at a time
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-6 text-balance text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Improve Your Health{" "}
            <span className="italic text-primary">with</span>{" "}
            <span className="whitespace-nowrap">Wizzaid®</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Wizzaid simplifies your healthcare experience, putting you in
            control of your well-being. Take the first step toward a healthier,
            happier life.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="/sign-up">
                Get Started
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/features">Find More</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <span
                  key={src}
                  className="relative inline-block size-8 overflow-hidden rounded-full border-2 border-background"
                  style={{ zIndex: avatars.length - i }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="32px"
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

          <motion.div
            variants={fadeUp}
            className="relative mt-10 w-full overflow-hidden rounded-[2rem] border border-border bg-background/95 px-4 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:px-6"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
              className="flex w-max gap-3"
            >
              {[...integrations, ...integrations].map((item, index) => (
                <span
                  key={`${item.label}-${index}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  {item.label}
                  {item.soon ? (
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      soon
                    </span>
                  ) : null}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image collage */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.08, 0.15)}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4"
        >
          {collage.map((item) => (
            <motion.figure
              key={item.src}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-3xl bg-muted shadow-sm ring-1 ring-border ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover"
              />
            </motion.figure>
          ))}
          <motion.div
            variants={fadeUp}
            className="relative hidden aspect-3/4 flex-col items-center justify-center gap-2 rounded-3xl bg-primary p-4 text-center text-primary-foreground sm:flex"
          >
            <span className="font-display text-4xl leading-none">100k+</span>
            <span className="text-xs opacity-90">
              Health goals achieved this year
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

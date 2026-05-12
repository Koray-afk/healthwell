"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

const SCREENS = ["/heroimage.png", "/vitalsscreenimage.png", "/dashboardimage.png"];
const PHONE_W = 264;
const PHONE_H = 540;

function Phone({
  src,
  alt,
  className,
  style,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: MotionStyle;
  priority?: boolean;
}) {
  return (
    <motion.div style={style} className={className}>
      <div
        className="rounded-[2.6rem] bg-neutral-900 p-[6px] shadow-2xl ring-1 ring-white/10"
        style={{ width: PHONE_W, height: PHONE_H }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-neutral-800">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${PHONE_W}px`}
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function AppShowcase() {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.0005,
  });

  // Box + heading + buttons: settle in right at the start
  const boxOpacity = useTransform(p, [0, 0.04], [0, 1]);
  const headingOpacity = useTransform(p, [0, 0.05], [0, 1]);
  const headingY = useTransform(p, [0, 0.05], [18, 0]);
  // Buttons slide in from the left
  const buttonsX = useTransform(p, [0, 0.1], [-64, 0]);
  const buttonsOpacity = useTransform(p, [0, 0.07], [0, 1]);

  // The first phone rises up from the bottom, then slides over to the left
  const centerY = useTransform(p, [0.05, 0.42], [560, 0]);
  const centerOpacity = useTransform(p, [0.05, 0.16], [0, 1]);
  const centerX = useTransform(p, [0.2, 0.7], [0, -188]);

  // Hidden behind the first phone at first; then both come out from behind it,
  // sliding in the same direction (rightward) into a left→right cascade.
  const x2 = useTransform(p, [0.22, 0.66], [-40, 6]);
  const y2 = useTransform(p, [0.22, 0.66], [0, 18]);
  const scale2 = useTransform(p, [0.22, 0.66], [0.94, 0.95]);
  const opacity2 = useTransform(p, [0.22, 0.34], [0, 1]);

  const x3 = useTransform(p, [0.36, 0.82], [-20, 196]);
  const y3 = useTransform(p, [0.36, 0.82], [0, 36]);
  const scale3 = useTransform(p, [0.36, 0.82], [0.88, 0.9]);
  const opacity3 = useTransform(p, [0.36, 0.48], [0, 1]);

  return (
    <>
      {/* ===================== Desktop: pinned slider inside a box ===================== */}
      <section
        id="app"
        ref={outerRef}
        className="relative hidden bg-background lg:block"
        style={{ height: "270vh" }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden p-3 sm:p-4 lg:p-6">
          {/* The box container */}
          <motion.div
            style={{ opacity: boxOpacity }}
            className="relative h-[86vh] max-h-[820px] w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-border bg-card sm:rounded-[2.25rem] lg:rounded-[2.5rem]"
          >
            {/* soft glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_38%,var(--color-primary),transparent)]/8" />

            {/* Heading + store buttons */}
            <motion.div
              style={{ opacity: headingOpacity, y: headingY }}
              className="absolute inset-x-0 top-[7%] z-30 flex flex-col items-center px-8 text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Mobile App
              </span>
              <h2 className="mt-3 font-display text-balance text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Download the App
              </h2>
              <motion.div
                style={{ x: buttonsX, opacity: buttonsOpacity }}
                className="mt-7 flex flex-wrap items-center justify-center gap-3"
              >
                <Button size="lg" className="group">
                  App Store
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
                <Button size="lg" variant="outline">
                  Google Play
                </Button>
              </motion.div>
            </motion.div>

            {/* Phones — anchored to the box's lower half so they slide into / out of it */}
            <div className="absolute inset-x-0 bottom-0 top-[44%] flex items-start justify-center">
              <div className="relative flex items-start">
                {/* phone 3 — furthest behind / right end of the cascade */}
                <Phone
                  src={SCREENS[2]}
                  alt="Wizzaid appointments screen"
                  className="absolute left-1/2 top-0 z-10 ml-[-132px]"
                  style={{
                    x: x3,
                    y: y3,
                    scale: scale3,
                    opacity: opacity3,
                  }}
                />
                {/* phone 2 — middle of the cascade, behind phone 1 */}
                <Phone
                  src={SCREENS[1]}
                  alt="Wizzaid health records screen"
                  className="absolute left-1/2 top-0 z-20 ml-[-132px]"
                  style={{
                    x: x2,
                    y: y2,
                    scale: scale2,
                    opacity: opacity2,
                  }}
                />
                {/* phone 1 — front of the cascade; rises from the bottom then slides left */}
                <Phone
                  src={SCREENS[0]}
                  alt="Wizzaid app home screen"
                  className="relative z-30"
                  style={{ x: centerX, y: centerY, opacity: centerOpacity }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== Mobile: simple stacked version ===================== */}
      <Section className="overflow-hidden bg-background lg:hidden">
        <Container>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card px-6 py-12 sm:rounded-[2.25rem] sm:px-10">
            <div className="flex flex-col items-center text-center">
              <SectionHeading
                eyebrow="Mobile App"
                title="Download the App"
                description="Take Wizzaid with you — track vitals, book appointments, and stay connected with your care team anywhere."
              />
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" className="group">
                  App Store
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
                <Button size="lg" variant="outline">
                  Google Play
                </Button>
              </div>
              <div className="mt-12">
                <div
                  className="mx-auto rounded-[2.6rem] bg-neutral-900 p-[6px] shadow-2xl ring-1 ring-white/10"
                  style={{ width: PHONE_W, height: PHONE_H }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-neutral-800">
                    <Image
                      src={SCREENS[0]}
                      alt="Wizzaid app home screen"
                      fill
                      sizes={`${PHONE_W}px`}
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const gallery = [
  {
    src: "https://framerusercontent.com/images/rTCecVJvlUX4vk5N62cZegy9A.png",
    alt: "Woman centering herself before a workout",
    className: "object-[50%_18%]",
  },
  {
    src: "https://framerusercontent.com/images/SJeYfmDXTnQ78kAjryUb3BRTfCM.png",
    alt: "Fresh orange slices in sparkling water",
    className: "object-[50%_45%]",
  },
  {
    src: "https://framerusercontent.com/images/gKM8NHPF6nUIuVZAxt5Z3WTWk4M.png",
    alt: "Happy woman standing in a sunny field",
    className: "object-[55%_30%]",
  },
  {
    src: "https://framerusercontent.com/images/p3oPxuTOfbFzdz8u2rijPvMDk7A.png",
    alt: "Man exercising on steps",
    className: "object-[60%_40%]",
  },
  {
    src: "https://framerusercontent.com/images/hCM6OFx68YQKwTZqWmAI89coNfc.png",
    alt: "Woman doing a calming stretch",
    className: "object-[50%_35%]",
  },
  {
    src: "https://framerusercontent.com/images/hr9vYb8A9MLNSs37jmImU8pbVcA.png",
    alt: "Fresh greens and herbal ingredients",
    className: "object-[50%_50%]",
  },
  {
    src: "https://framerusercontent.com/images/pOBrOh7Mo3MyTwNtRyIO3KsDDbE.png",
    alt: "Runner warming up at sunrise",
    className: "object-[50%_40%]",
  },
  {
    src: "https://framerusercontent.com/images/x9fGimzEnIYwaxJkG9dCwHhxy4M.png",
    alt: "Healthy breakfast on a table",
    className: "object-[50%_55%]",
  },
];

const galleryStagger = stagger(0.18, 0.12);

export function Expedition() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [scrollLength, setScrollLength] = React.useState(0);
  const [sectionHeight, setSectionHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    const update = () => {
      const sectionWidth = section.getBoundingClientRect().width;
      const trackWidth = track.scrollWidth;
      const length = Math.max(0, trackWidth - sectionWidth);

      setScrollLength(length);
      setSectionHeight(length + window.innerHeight);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(section);
    observer.observe(track);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -scrollLength]);
  const x = useSpring(xRaw, { stiffness: 90, damping: 22, mass: 0.5 });

  return (
    <Section id="about" className="bg-background py-16 sm:py-20 lg:py-24">
      <div ref={sectionRef} className="relative">
        <div style={{ height: sectionHeight ? `${sectionHeight}px` : "200vh" }}>
          <Container className="sticky top-24 max-w-[80rem]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger(0.1)}
              className="overflow-hidden rounded-[2.5rem] border border-border bg-blue-50 shadow-sm"
            >
              <div className="grid gap-8 px-8 py-10 sm:px-12 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <motion.h2
                  variants={fadeUp}
                  className="font-display text-balance text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl"
                >
                  Empowering Well-being:
                  <br />
                  Our Expedition
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg"
                >
                  We believe that everyone deserves access to quality healthcare.
                  Our journey began with a simple yet powerful idea: to create a
                  healthcare app that empowers individuals to take control of
                  their health and well-being.
                </motion.p>
              </div>

              <div className="border-t border-border/60">
                <motion.div
                  ref={trackRef}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={galleryStagger}
                  style={{ x }}
                  className="flex w-max gap-4 px-8 py-10 sm:gap-6 sm:px-12 lg:px-14"
                >
                  {gallery.map((item) => (
                    <motion.figure
                      key={item.src}
                      variants={fadeUp}
                      className="relative h-44 w-[70vw] shrink-0 overflow-hidden rounded-2xl bg-muted sm:h-52 sm:w-[45vw] lg:h-64 lg:w-[22rem]"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 22rem"
                        className={`object-cover ${item.className}`}
                      />
                    </motion.figure>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </Section>
  );
}

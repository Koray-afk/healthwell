"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
];

export function Expedition() {
  return (
    <Section id="about" className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
          className="overflow-hidden rounded-[2.5rem] border border-border bg-[oklch(0.96_0.02_90)] shadow-sm"
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
              We believe that everyone deserves access to quality healthcare. Our
              journey began with a simple yet powerful idea: to create a
              healthcare app that empowers individuals to take control of their
              health and well-being.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 border-t border-border/60 sm:grid-cols-4">
            {gallery.map((item) => (
              <motion.figure
                key={item.src}
                variants={fadeUp}
                className="relative h-44 overflow-hidden bg-muted sm:h-52 lg:h-64"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`object-cover ${item.className}`}
                />
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

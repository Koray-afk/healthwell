"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const marquee = [
  "https://framerusercontent.com/images/rTCecVJvlUX4vk5N62cZegy9A.png",
  "https://framerusercontent.com/images/SJeYfmDXTnQ78kAjryUb3BRTfCM.png",
  "https://framerusercontent.com/images/gKM8NHPF6nUIuVZAxt5Z3WTWk4M.png",
  "https://framerusercontent.com/images/p3oPxuTOfbFzdz8u2rijPvMDk7A.png",
  "https://framerusercontent.com/images/V1wPGcCQ3AdLQsLehKVYPjfFdtw.png",
  "https://framerusercontent.com/images/COMHkyUdB3Mw3XDVXBhxoQ2C2Ho.png",
  "https://framerusercontent.com/images/J8toC5jQr8ekY195cg86HOjgvHE.png",
  "https://framerusercontent.com/images/8hyZ01geGJUVqGcyJuIjtBlGeA.png",
];

export function Expedition() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="About"
              title={
                <>
                  Empowering Well-being:
                  <br />
                  <span className="italic text-primary">Our Expedition</span>
                </>
              }
              description="We believe everyone deserves access to quality healthcare. Our journey began with a simple yet powerful idea: to create a healthcare app that empowers individuals to take control of their health and well-being."
            />
            <div>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">
                  Know Us Better
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative -mx-4 overflow-hidden sm:mx-0"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex w-max gap-4"
            >
              {[...marquee, ...marquee].map((src, i) => (
                <span
                  key={i}
                  className="relative block aspect-3/4 w-44 shrink-0 overflow-hidden rounded-3xl bg-muted ring-1 ring-border"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

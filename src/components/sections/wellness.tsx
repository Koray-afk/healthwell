"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const cards = [
  {
    title: "Health Education",
    image:
      "https://framerusercontent.com/images/hCM6OFx68YQKwTZqWmAI89coNfc.png",
  },
  {
    title: "Community Forums",
    image:
      "https://framerusercontent.com/images/hr9vYb8A9MLNSs37jmImU8pbVcA.png",
  },
  {
    title: "Wellness Challenges",
    image:
      "https://framerusercontent.com/images/Tj3f6aEqmUBThT03VPU50iNk1mU.png",
  },
  {
    title: "Custom Health Tips",
    image:
      "https://framerusercontent.com/images/2kgOO6ejovXbAoVkMY6B2evw9Y.png",
  },
  {
    title: "Wellness Programs",
    image:
      "https://framerusercontent.com/images/dhIDCwtJv1zOgMGkUET3h75A.png",
  },
];

export function Wellness() {
  return (
    <Section id="features-wellness" className="bg-secondary/30">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Wellness Resources{" "}
              <span className="italic text-primary">&</span> Support
            </>
          }
          description="Explore wellness resources and personalized support tools tailored to your goals."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.07)}
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-5"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl"
            >
              <Link href="/features" className="block">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white">
                  <span className="font-display text-xl">{c.title}</span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

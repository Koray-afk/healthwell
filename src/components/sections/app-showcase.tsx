"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export function AppShowcase() {
  return (
    <Section id="app" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Mobile App"
              title={
                <>
                  Download <span className="italic text-primary">the App</span>
                </>
              }
              description="Take Wizzaid with you. Track vitals, book appointments, and stay connected with your care team — anywhere."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                <Download />
                App Store
              </Button>
              <Button size="lg" variant="outline">
                <Download />
                Google Play
              </Button>
            </div>
          </div>

          {/* Phone screenshot with floating cards */}
          <div className="relative mx-auto h-[600px] w-full max-w-md">
            <div className="relative mx-auto h-[600px] w-[300px] overflow-hidden rounded-[3.5rem]">
              <Image
                src="/heroimage.png"
                alt="Wizzaid app health dashboard"
                fill
                sizes="300px"
                className="object-cover drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-12 hidden rounded-2xl border border-border bg-background p-3 shadow-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Heart rate
              </p>
              <p className="font-display text-2xl text-primary">72 bpm</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-24 hidden rounded-2xl border border-border bg-background p-3 shadow-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Steps today
              </p>
              <p className="font-display text-2xl">8,420</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

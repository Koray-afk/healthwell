"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { fadeUp, stagger, viewport } from "@/lib/motion";

const articles = [
  {
    title: "Healthy Eating Habits for Kids",
    category: "Family Health",
    date: "Jun 17, 2024",
    author: "Dr. Michael Chen",
    image:
      "https://framerusercontent.com/images/V1wPGcCQ3AdLQsLehKVYPjfFdtw.png",
    href: "/articles/healthy-eating-habits-for-kids",
  },
  {
    title: "Skin Cancer Awareness: How to Protect Your Skin",
    category: "Preventive Care",
    date: "Jun 17, 2024",
    author: "Maria Rodriguez",
    image:
      "https://framerusercontent.com/images/8hyZ01geGJUVqGcyJuIjtBlGeA.png",
    href: "/articles/skin-cancer-awareness-how-to-protect-your-skin",
  },
];

export function Articles() {
  return (
    <Section id="articles" className="bg-secondary/30">
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            align="left"
            eyebrow="Articles"
            title={
              <>
                Insights & Tips for a{" "}
                <span className="italic text-primary">Healthier Life</span>
              </>
            }
            description="Expert articles on nutrition, exercise, mental well-being, and chronic disease management."
          />
          <Button asChild size="lg" variant="outline" className="lg:self-end">
            <Link href="/articles">
              View All Articles
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.1)}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {articles.map((a) => (
            <motion.article
              key={a.href}
              variants={fadeUp}
              className="group flex flex-col gap-4"
            >
              <Link href={a.href} className="overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] w-full bg-muted">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                  {a.category}
                </span>
                <span>{a.date}</span>
              </div>
              <h3 className="font-display text-2xl leading-tight">
                <Link href={a.href} className="hover:text-primary">
                  {a.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">by {a.author}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

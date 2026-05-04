"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 12);
  });

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--background) 70%, transparent)"
          : "color-mix(in oklab, var(--background) 0%, transparent)",
        boxShadow: scrolled
          ? "0 1px 0 0 color-mix(in oklab, var(--border) 60%, transparent)"
          : "0 0 0 0 transparent",
      }}
      transition={{ duration: 0.25 }}
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md",
      )}
    >
      <Container className="flex h-24 items-center justify-between gap-6">
        <Logo showWord={false} />

        <nav className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild size="lg" className="hidden sm:inline-flex">
            <Link href="/dashboard">
              Dashboard
              <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-border/60 bg-background/90 backdrop-blur md:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild size="lg" className="flex-1">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </Container>
      </motion.div>
    </motion.header>
  );
}

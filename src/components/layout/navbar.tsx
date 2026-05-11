"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const isHome = pathname === "/";

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
          ? "rgba(255, 255, 255, 0.55)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: scrolled
          ? "0 8px 32px -4px rgba(0, 0, 0, 0.08)"
          : "0 0 0 0 transparent",
        borderBottomColor: scrolled
          ? "rgba(0, 0, 0, 0.06)"
          : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent backdrop-blur-2xl backdrop-saturate-[1.8] supports-[backdrop-filter]:backdrop-blur-2xl",
      )}
    >
      <Container className="relative flex h-24 items-center justify-between gap-6">
        <div className="flex flex-1 items-center justify-start">
          <Logo
            showWord={false}
            className="h-20 w-72 shrink-0 md:h-[110px] md:w-[380px]"
          />
        </div>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 xl:flex">
          {siteConfig.nav.map((item) => {
            const active =
              (item.href as string) === "/"
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
                <span className="flex items-center gap-1 font-medium">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="size-4 opacity-50" />}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-5">
          <div className="hidden items-center gap-2 text-sm font-semibold xl:flex">
            <span className="text-[#1D5BFF]">EN</span>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-muted-foreground">العربية</span>
          </div>
          <Link href="/demo">
            <Button size="default" className="hidden rounded-xl bg-[#1D5BFF] px-6 font-semibold text-white hover:bg-[#1A52E5] sm:inline-flex">
              Book a Demo
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="xl:hidden"
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
        className="overflow-hidden border-t border-border/60 bg-[rgba(255,255,255,0.95)] backdrop-blur-xl xl:hidden"
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
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold">
              <span className="text-[#1D5BFF]">EN</span>
              <span className="text-muted-foreground/30">|</span>
              <span className="text-muted-foreground">العربية</span>
            </div>
            <Link href="/demo" className="w-full">
              <Button size="lg" className="w-full rounded-xl bg-[#1D5BFF] font-semibold text-white hover:bg-[#1A52E5]">
                Book a Demo
              </Button>
            </Link>
          </div>
        </Container>
      </motion.div>
    </motion.header>
  );
}

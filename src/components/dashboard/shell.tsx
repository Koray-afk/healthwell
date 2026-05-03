"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  FileHeart,
  MessageSquare,
  Settings,
  CreditCard,
  Bell,
  Search,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/dashboard/records", label: "Records", icon: FileHeart },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/set-state-in-effect
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="flex min-h-screen w-full bg-secondary/20">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-background transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-2">
          {nav.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Plan
          </p>
          <p className="font-display mt-1 text-lg">Premium</p>
          <Link
            href="/dashboard/billing"
            className="mt-2 inline-flex text-xs text-primary hover:underline"
          >
            Manage subscription →
          </Link>
        </div>
      </aside>

      {/* Backdrop on mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur sm:px-6">
          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search records, messages, doctors…"
              className="h-10 w-full rounded-xl border border-border bg-background pl-9 pr-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
            />
          </div>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell />
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <LogOut />
              Exit
            </Link>
          </Button>
          <span className="size-9 rounded-full bg-primary/15 ring-2 ring-primary/30" />
        </header>

        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">{children}</main>
      </div>
    </div>
  );
}

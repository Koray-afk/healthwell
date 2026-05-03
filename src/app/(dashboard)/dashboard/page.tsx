import {
  Activity,
  HeartPulse,
  Apple,
  Moon,
  CalendarDays,
  Pill,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const vitals = [
  { icon: HeartPulse, label: "Heart Rate", value: "72", unit: "bpm", trend: "+2%" },
  { icon: Activity, label: "Steps", value: "8,420", unit: "today", trend: "+12%" },
  { icon: Apple, label: "Calories", value: "1,840", unit: "kcal", trend: "-4%" },
  { icon: Moon, label: "Sleep", value: "7h 12m", unit: "last night", trend: "+8%" },
];

const upcoming = [
  {
    title: "Nutritionist Appointment",
    when: "Jun 12 · 02:30 PM",
    doctor: "Dr. Sarah Thompson",
  },
  {
    title: "Cardiology Follow-up",
    when: "Jun 18 · 10:00 AM",
    doctor: "Dr. Daniel Lewis",
  },
];

const meds = [
  { name: "Atorvastatin", dose: "10mg · daily", taken: true },
  { name: "Vitamin D3", dose: "1000 IU · morning", taken: true },
  { name: "Omega-3", dose: "1000mg · with food", taken: false },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground">Good morning,</p>
        <h1 className="font-display text-4xl">Welcome back, Dexter 🌿</h1>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {vitals.map((v) => {
          const Icon = v.icon;
          const positive = v.trend.startsWith("+");
          return (
            <article
              key={v.label}
              className="rounded-3xl border border-border bg-card p-5"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span
                  className={`text-xs ${positive ? "text-primary" : "text-muted-foreground"}`}
                >
                  {v.trend}
                </span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {v.label}
              </p>
              <p className="font-display mt-1 text-3xl">
                {v.value}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  {v.unit}
                </span>
              </p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl">Upcoming appointments</h2>
            <Link
              href="/dashboard/appointments"
              className="inline-flex items-center gap-1 text-sm text-primary"
            >
              View all <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-border">
            {upcoming.map((u) => (
              <li
                key={u.title}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <CalendarDays className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium">{u.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {u.when} · {u.doctor}
                    </p>
                  </div>
                </div>
                <button className="rounded-full border border-border px-3 py-1.5 text-xs hover:bg-secondary">
                  Reschedule
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Today’s medication</h2>
          <ul className="mt-4 space-y-3">
            {meds.map((m) => (
              <li
                key={m.name}
                className="flex items-center justify-between rounded-2xl border border-border p-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-9 items-center justify-center rounded-xl ${m.taken ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}
                  >
                    <Pill className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.dose}</p>
                  </div>
                </div>
                <span
                  className={`text-xs ${m.taken ? "text-primary" : "text-muted-foreground"}`}
                >
                  {m.taken ? "Taken" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

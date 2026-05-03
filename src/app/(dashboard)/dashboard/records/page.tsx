import { FileHeart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  ["Height", "5'10\" (178 cm)"],
  ["Weight", "175 lbs (79 kg)"],
  ["BMI", "25.1"],
  ["Blood Pressure", "120/80 mmHg"],
  ["Heart Rate", "72 bpm"],
  ["Blood Glucose", "90 mg/dL"],
  ["Cholesterol (Total)", "180 mg/dL"],
  ["Vitamin D", "30 ng/mL"],
];

const tests = [
  { name: "Complete Blood Count", date: "Mar 17, 2024", status: "Normal" },
  { name: "Lipid Panel", date: "Mar 17, 2024", status: "Normal" },
  { name: "Electrocardiogram", date: "Feb 15, 2024", status: "Normal" },
  { name: "Thyroid Test", date: "Mar 17, 2024", status: "Slightly low" },
];

export default function RecordsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl">Health records</h1>
        <Button variant="outline">
          <Download />
          Export PDF
        </Button>
      </div>

      <section className="rounded-3xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Health metrics</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([k, v]) => (
            <li
              key={k}
              className="rounded-2xl border border-border bg-background p-4"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {k}
              </p>
              <p className="font-display mt-1 text-xl">{v}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Recent test results</h2>
        <ul className="mt-4 divide-y divide-border">
          {tests.map((t) => (
            <li
              key={t.name}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FileHeart className="size-5" />
                </span>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs ${t.status === "Normal" ? "bg-primary/15 text-primary" : "bg-amber-500/15 text-amber-700"}`}
              >
                {t.status}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "All Basic Plan Features",
  "Advanced Wellness Challenges",
  "Comprehensive Health Tracking",
  "Unlimited Telemedicine",
  "Detailed Reports & Analytics",
  "Priority Appointment Scheduling",
];

const invoices = [
  { id: "INV-2026-04", date: "Apr 1, 2026", amount: "$15.40", status: "Paid" },
  { id: "INV-2026-03", date: "Mar 1, 2026", amount: "$15.40", status: "Paid" },
  { id: "INV-2026-02", date: "Feb 1, 2026", amount: "$15.40", status: "Paid" },
];

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl">Billing</h1>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
                <Sparkles className="size-3" />
                Premium Plan
              </span>
              <p className="font-display mt-3 text-3xl">$15.40 / month</p>
              <p className="text-sm text-muted-foreground">
                Renews on May 1, 2026
              </p>
            </div>
            <Button variant="outline">Manage</Button>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-foreground/90"
              >
                <Check className="size-4 text-primary" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild>
              <Link href="/pricing">Upgrade to Elite</Link>
            </Button>
            <Button variant="ghost">Cancel subscription</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="font-display text-xl">Payment method</h2>
          <div className="mt-4 rounded-2xl border border-border bg-background p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Visa ending in
            </p>
            <p className="font-display mt-1 text-2xl">•••• 4242</p>
            <p className="text-xs text-muted-foreground">Expires 09/28</p>
          </div>
          <Button variant="outline" className="mt-4 w-full">
            Update card
          </Button>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Invoices</h2>
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-muted-foreground">
              <th className="pb-3 font-medium">Invoice</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {invoices.map((i) => (
              <tr key={i.id}>
                <td className="py-3 font-medium">{i.id}</td>
                <td className="py-3 text-muted-foreground">{i.date}</td>
                <td className="py-3">{i.amount}</td>
                <td className="py-3">
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">
                    {i.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="text-sm text-primary hover:underline">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

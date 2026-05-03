import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl">Settings</h1>

      <section className="rounded-3xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Profile</h2>
        <p className="text-sm text-muted-foreground">
          Update your personal information.
        </p>
        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Full name" defaultValue="Dexter Morgan" />
          <Field label="Email" type="email" defaultValue="dexter@example.com" />
          <Field label="Phone" defaultValue="+1 (415) 555-0142" />
          <Field label="Date of birth" type="date" defaultValue="1995-08-12" />
          <div className="sm:col-span-2 flex justify-end">
            <Button>Save changes</Button>
          </div>
        </form>
      </section>

      <section className="rounded-3xl border border-border bg-card p-6">
        <h2 className="font-display text-2xl">Notifications</h2>
        <ul className="mt-4 divide-y divide-border">
          {[
            ["Appointment reminders", "Email + push 1 day before"],
            ["Medication reminders", "Push at scheduled times"],
            ["Weekly summary", "Email every Monday morning"],
            ["Marketing tips", "Email twice a month"],
          ].map(([k, v]) => (
            <li key={k} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{k}</p>
                <p className="text-xs text-muted-foreground">{v}</p>
              </div>
              <Toggle defaultChecked />
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6">
        <h2 className="font-display text-2xl text-destructive">Danger zone</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          These actions are permanent.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="destructive">Export & delete account</Button>
          <Button variant="outline">Deactivate</Button>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        {...props}
        className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
      />
    </label>
  );
}

function Toggle({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <label className="relative inline-flex h-6 w-11 cursor-pointer items-center">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="absolute inset-0 rounded-full bg-secondary transition-colors peer-checked:bg-primary" />
      <span className="relative ml-0.5 inline-block size-5 rounded-full bg-background shadow transition-transform peer-checked:translate-x-5" />
    </label>
  );
}

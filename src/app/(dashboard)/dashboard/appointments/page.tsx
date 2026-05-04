import { CalendarDays, Video, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const appointments = [
  {
    title: "Nutritionist Appointment",
    doctor: "Dr. Sarah Thompson",
    type: "In-person",
    when: "Jun 12, 2024 · 02:30 PM",
    location: "Bay Wellness Clinic",
    status: "confirmed",
  },
  {
    title: "Cardiology Follow-up",
    doctor: "Dr. Daniel Lewis",
    type: "Telemedicine",
    when: "Jun 18, 2024 · 10:00 AM",
    location: "Video call",
    status: "confirmed",
  },
  {
    title: "Annual Physical",
    doctor: "Dr. Helena Rivera",
    type: "In-person",
    when: "Jul 02, 2024 · 09:15 AM",
    location: "Wizzaid HQ Clinic",
    status: "pending",
  },
];

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl">Appointments</h1>
        <Button>
          <Plus />
          New appointment
        </Button>
      </div>

      <ul className="grid gap-4 lg:grid-cols-2">
        {appointments.map((a) => {
          const TypeIcon = a.type === "Telemedicine" ? Video : MapPin;
          return (
            <li
              key={a.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CalendarDays className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.doctor}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs ${a.status === "confirmed" ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}
                >
                  {a.status}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <TypeIcon className="size-4" />
                  {a.type}
                </span>
                <span>·</span>
                <span>{a.when}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {a.location}
              </p>
              <div className="mt-5 flex gap-2">
                <Button size="sm" variant="outline">
                  Reschedule
                </Button>
                <Button size="sm" variant="ghost">
                  Cancel
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

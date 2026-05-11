import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Request a Demo | Wizzaid",
  description: "See how Wizzaid can transform your healthcare organization.",
};

export default function DemoPage() {
  return (
    <Section className="pb-24 pt-32 sm:pt-40">
      <Container className="flex max-w-2xl flex-col items-center justify-center">
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Request a <span className="text-zinc-500 dark:text-zinc-400">Demo</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            See how Wizzaid can transform your healthcare organization. Fill out the form below and our team will contact you to schedule a personalized demo.
          </p>
        </div>

        <div className="w-full rounded-3xl bg-card p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-border sm:p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium text-foreground">First Name *</label>
                <input required type="text" placeholder="John" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-foreground">Last Name *</label>
                <input required type="text" placeholder="Doe" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium text-foreground">Email Address *</label>
                <input required type="email" placeholder="john.doe@example.com" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-foreground">Phone Number *</label>
                <input required type="tel" placeholder="+1 (555) 123-4567" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">Role *</label>
              <select required defaultValue="" className="w-full appearance-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="" disabled hidden>Select your role</option>
                <option value="physician">Physician</option>
                <option value="administrator">Administrator</option>
                <option value="nurse">Nurse</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">Organization Name *</label>
              <input required type="text" placeholder="Your Hospital/Clinic Name" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">Number of Providers *</label>
              <select required defaultValue="" className="w-full appearance-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="" disabled hidden>Select range</option>
                <option value="1-10">1 - 10</option>
                <option value="11-50">11 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="200+">200+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">Additional Information (Optional)</label>
              <textarea rows={4} placeholder="Tell us about your specific needs or questions..." className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl py-6 text-base font-semibold">
              <Send className="mr-2 size-5" />
              Submit Request
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}

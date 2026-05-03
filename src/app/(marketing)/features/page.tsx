import { Tracking } from "@/components/sections/tracking";
import { Appointments } from "@/components/sections/appointments";
import { Wellness } from "@/components/sections/wellness";
import { Newsletter } from "@/components/sections/newsletter";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = {
  title: "Features",
  description:
    "All the tools to track your health, connect with providers, and live well.",
};

export default function FeaturesPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Everything you need to{" "}
                <span className="italic text-primary">live well</span>
              </>
            }
            description="From medication reminders to telemedicine, HealthWell brings every part of your wellness journey into one calm, focused experience."
          />
        </Container>
      </Section>
      <Tracking />
      <Appointments />
      <Wellness />
      <Newsletter />
    </>
  );
}

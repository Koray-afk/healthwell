import { AppShowcase } from "@/components/sections/app-showcase";

import { Stats } from "@/components/sections/stats";
import { Tracking } from "@/components/sections/tracking";
import { Newsletter } from "@/components/sections/newsletter";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = {
  title: "Platform",
  description: "Discover the Wizzaid platform and our suite of health tracking tools.",
};

export default function PlatformPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title={
              <>
                The Comprehensive{" "}
                <span className="italic text-primary">Health Platform</span>
              </>
            }
            description="Explore our robust ecosystem of applications, dashboards, and connected devices designed to give you complete visibility into your wellbeing."
          />
        </Container>
      </Section>
      <AppShowcase />

      <Stats />
      <Tracking />
      <Newsletter />
    </>
  );
}

import { Expedition } from "@/components/sections/expedition";
import { Stats } from "@/components/sections/stats";
import { Wellness } from "@/components/sections/wellness";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = {
  title: "About",
  description:
    "Our journey began with a simple yet powerful idea: empower people to take control of their health.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Empowering Well-being:{" "}
                <span className="italic text-primary">Our Expedition</span>
              </>
            }
            description="Wizzaid was born from a belief that quality healthcare should be accessible, simple, and human."
          />
        </Container>
      </Section>
      <Expedition />
      <Stats />
      <Wellness />
      <Testimonials />
      <Faq />
      <Newsletter />
    </>
  );
}

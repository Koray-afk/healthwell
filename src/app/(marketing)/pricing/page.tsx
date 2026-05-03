import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = {
  title: "Pricing",
  description: "Simple plans that grow with your wellness journey.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Plans that grow with{" "}
                <span className="italic text-primary">you</span>
              </>
            }
            description="Start free, upgrade when you’re ready. Cancel anytime."
          />
        </Container>
      </Section>
      <Pricing />
      <Testimonials />
      <Faq />
      <Newsletter />
    </>
  );
}

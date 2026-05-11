import { Articles } from "@/components/sections/articles";
import { Faq } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = {
  title: "Resources",
  description: "Helpful resources, articles, and guides for your health journey.",
};

export default function ResourcesPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title={
              <>
                Empowering Your{" "}
                <span className="italic text-primary">Knowledge</span>
              </>
            }
            description="Read the latest articles on health trends, browse our comprehensive FAQ, and see how others are achieving their wellness goals."
          />
        </Container>
      </Section>
      <Articles />
      <Faq />
      <Testimonials />
      <Newsletter />
    </>
  );
}

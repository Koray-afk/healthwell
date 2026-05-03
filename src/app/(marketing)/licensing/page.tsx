import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = { title: "Licensing" };

export default function LicensingPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title={<>Licensing <span className="italic text-primary">terms</span></>}
            description="Use of the HealthWell brand, content, and product."
          />
        </Container>
      </Section>

      <Section className="pt-12">
        <Container className="max-w-3xl">
          <article className="space-y-6 leading-relaxed text-foreground/90">
            <p>
              All HealthWell brand assets — including the wordmark, logo and
              illustrations — are © HealthWell. You may not reproduce, modify,
              or distribute them without express written permission.
            </p>
            <h2 className="font-display text-2xl">Content</h2>
            <p>
              Articles and educational content are licensed for personal,
              non-commercial use. For syndication or republication, contact us
              at{" "}
              <a className="text-primary underline" href="mailto:partners@healthwell.app">
                partners@healthwell.app
              </a>
              .
            </p>
            <h2 className="font-display text-2xl">Open source</h2>
            <p>
              HealthWell is built with love on top of incredible open-source
              projects. We open-source useful pieces of our work back to the
              community whenever we can.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}

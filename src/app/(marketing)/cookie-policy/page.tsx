import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title={<>Cookie <span className="italic text-primary">Policy</span></>}
            description="How and why we use cookies and similar technologies."
          />
        </Container>
      </Section>

      <Section className="pt-12">
        <Container className="max-w-3xl">
          <article className="space-y-6 leading-relaxed text-foreground/90">
            <p>
              We use cookies to keep you signed in, remember your preferences,
              and understand how the product is used so we can make it better.
            </p>
            <h2 className="font-display text-2xl">Categories</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Essential</strong> — required for the site to function (auth, security).</li>
              <li><strong>Preferences</strong> — remember theme, language, etc.</li>
              <li><strong>Analytics</strong> — anonymous usage to guide improvements.</li>
            </ul>
            <p>
              You can control cookies in your browser. Disabling essential
              cookies will limit access to certain features.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}

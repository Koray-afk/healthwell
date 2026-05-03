import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title={<>Privacy <span className="italic text-primary">Policy</span></>}
            description="Last updated: January 1, 2026"
          />
        </Container>
      </Section>

      <Section className="pt-12">
        <Container className="max-w-3xl">
          <article className="space-y-6 text-pretty leading-relaxed text-foreground/90">
            <p>
              At HealthWell, your privacy is foundational. This policy explains
              what data we collect, why we collect it, and how you can control
              it.
            </p>
            <h2 className="font-display text-2xl">Information we collect</h2>
            <p>
              We collect account details (name, email), health data you choose
              to log, and minimal device information necessary to deliver our
              service.
            </p>
            <h2 className="font-display text-2xl">How we use it</h2>
            <p>
              Your data powers personalized recommendations, reminders, and
              communication with your providers. We never sell your data.
            </p>
            <h2 className="font-display text-2xl">Your rights</h2>
            <p>
              You can export, edit, or permanently delete your data at any time
              from your account settings. We honor GDPR, CCPA, and HIPAA-style
              best practices.
            </p>
            <h2 className="font-display text-2xl">Contact</h2>
            <p>
              Questions? Email{" "}
              <a className="text-primary underline" href="mailto:privacy@healthwell.app">
                privacy@healthwell.app
              </a>
              .
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}

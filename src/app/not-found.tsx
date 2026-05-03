import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <Container className="flex flex-col items-center text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Heart className="size-7 fill-current" strokeWidth={0} />
        </span>
        <p className="font-display mt-6 text-7xl text-primary sm:text-8xl">
          404
        </p>
        <h1 className="font-display mt-2 text-3xl sm:text-4xl">
          This page took a sick day
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you’re looking for can’t be found. Let’s get you back to
          something that actually exists.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft />
              Back home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Report it</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

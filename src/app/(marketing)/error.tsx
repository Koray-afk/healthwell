"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-md text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-destructive/15 text-destructive">
          <AlertCircle className="size-6" />
        </span>
        <h1 className="font-display mt-6 text-4xl">We hit a snag</h1>
        <p className="mt-3 text-muted-foreground">
          Don&apos;t worry — your data is safe. Try again or head home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button onClick={reset}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

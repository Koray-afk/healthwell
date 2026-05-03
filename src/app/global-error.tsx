"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
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
    <html>
      <body className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="mx-auto max-w-md text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-destructive/15 text-destructive">
            <AlertCircle className="size-6" />
          </span>
          <h1 className="font-display mt-6 text-4xl">Something went wrong</h1>
          <p className="mt-3 text-muted-foreground">
            An unexpected error occurred. We&apos;ve logged it and the team is
            on it.
          </p>
          {error.digest ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Reference: {error.digest}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Button onClick={reset}>Try again</Button>
            <Button asChild variant="outline">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}

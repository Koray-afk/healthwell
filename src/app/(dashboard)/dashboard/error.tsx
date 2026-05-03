"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardError({
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
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-destructive/15 text-destructive">
          <AlertCircle className="size-6" />
        </span>
        <h1 className="font-display mt-6 text-3xl">
          Couldn&apos;t load this page
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong fetching your data. Try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button onClick={reset}>Retry</Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">Dashboard home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

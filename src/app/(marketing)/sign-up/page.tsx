"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";

export default function SignUpPage() {
  return (
    <Container className="flex min-h-[80vh] max-w-md items-center justify-center">
      <div className="w-full">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h1 className="font-display text-3xl">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Take the first step toward a healthier life.
          </p>
          <form className="mt-6 flex flex-col gap-3">
            <input
              type="text"
              required
              placeholder="Full name"
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
            />
            <Button type="submit" size="lg">
              Get started
              <ArrowRight />
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

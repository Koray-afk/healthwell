import { Container } from "@/components/ui/container";

export default function MarketingLoading() {
  return (
    <Container className="py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <div className="h-3 w-28 animate-pulse rounded-full bg-secondary" />
        <div className="h-12 w-full animate-pulse rounded-2xl bg-secondary" />
        <div className="h-12 w-3/4 animate-pulse rounded-2xl bg-secondary" />
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-secondary" />
        <div className="h-4 w-1/2 animate-pulse rounded-full bg-secondary" />
      </div>
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-48 animate-pulse rounded-3xl bg-secondary/70"
          />
        ))}
      </div>
    </Container>
  );
}

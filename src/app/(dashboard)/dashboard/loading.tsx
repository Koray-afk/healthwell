export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="h-10 w-48 animate-pulse rounded-2xl bg-secondary" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-3xl bg-secondary/70"
          />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-72 animate-pulse rounded-3xl bg-secondary/70" />
        <div className="h-72 animate-pulse rounded-3xl bg-secondary/70" />
      </div>
    </div>
  );
}

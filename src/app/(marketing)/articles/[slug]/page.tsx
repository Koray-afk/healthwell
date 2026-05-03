import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Newsletter } from "@/components/sections/newsletter";
import { articles } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <Section className="pb-0 pt-12 sm:pt-16">
        <Container className="max-w-3xl">
          <Link
            href="/articles"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span>·</span>
            <span>by {article.author}</span>
          </div>
          <h1 className="font-display mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {article.excerpt}
          </p>
        </Container>
      </Section>

      <Section className="pt-10">
        <Container className="max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-muted">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
          <div className="prose prose-lg mt-10 max-w-none text-foreground/90">
            {article.body.map((p, i) => (
              <p key={i} className="mt-6 text-pretty leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {others.length > 0 ? (
        <Section className="pt-0">
          <Container>
            <h2 className="font-display text-3xl">Keep reading</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.slug}`}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <span className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={a.cover}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {a.category}
                    </span>
                    <span className="font-display mt-1 text-lg leading-snug group-hover:text-primary">
                      {a.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Newsletter />
    </>
  );
}

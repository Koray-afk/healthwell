import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Newsletter } from "@/components/sections/newsletter";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Articles",
  description: "Insights and tips for a healthier life.",
};

export default function ArticlesPage() {
  return (
    <>
      <Section className="pb-0 pt-16 sm:pt-20">
        <Container>
          <SectionHeading
            eyebrow="Articles"
            title={
              <>
                Insights & Tips for a{" "}
                <span className="italic text-primary">Healthier Life</span>
              </>
            }
            description="Expert articles on nutrition, exercise, mental well-being, and chronic disease management."
          />
        </Container>
      </Section>

      <Section className="pt-12">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <article key={a.slug} className="group flex flex-col gap-4">
                <Link
                  href={`/articles/${a.slug}`}
                  className="overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[4/3] w-full bg-muted">
                    <Image
                      src={a.cover}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                    {a.category}
                  </span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight">
                  <Link
                    href={`/articles/${a.slug}`}
                    className="hover:text-primary"
                  >
                    {a.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Newsletter />
    </>
  );
}

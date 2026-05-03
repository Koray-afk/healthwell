import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.94l-5.43-7.1L4.4 22H1.14l8.02-9.16L1 2h7.1l4.9 6.48L18.244 2Zm-2.43 18h1.93L7.27 4H5.2l10.614 16Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/30">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={siteConfig.links.twitter} label="Twitter">
                <TwitterIcon className="size-4" />
              </SocialLink>
              <SocialLink href={siteConfig.links.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-4" />
              </SocialLink>
              <SocialLink href={siteConfig.links.instagram} label="Instagram">
                <InstagramIcon className="size-4" />
              </SocialLink>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Menu
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.footer.menu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Useful Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {siteConfig.footer.useful.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.brand}. All rights reserved.
          </p>
          <p>Crafted with care for healthier living.</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </Link>
  );
}

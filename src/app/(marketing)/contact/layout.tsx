import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Wizzaid team — we usually reply within a day.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

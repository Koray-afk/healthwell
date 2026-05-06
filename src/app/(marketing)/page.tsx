import { Hero } from "@/components/sections/hero";
import { Expedition } from "@/components/sections/expedition";
import { Stats } from "@/components/sections/stats";
import { Tracking } from "@/components/sections/tracking";
import { Appointments } from "@/components/sections/appointments";
import { Wellness } from "@/components/sections/wellness";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Articles } from "@/components/sections/articles";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Expedition />
      <Stats />
      <Tracking />
      <Appointments />
      <AppShowcase />
      <Wellness />
      <Testimonials />
      <Pricing />
      <Faq />
      <Articles />
      <Newsletter />
    </>
  );
}

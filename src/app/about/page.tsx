import { AboutHero } from "@/components/about/AboutHero";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { OurApproach } from "@/components/about/OurApproach";
import { WhatWeBuild } from "@/components/about/WhatWeBuild";
import { OurWork } from "@/components/about/OurWork";
import { TechnologyStack } from "@/components/about/TechnologyStack";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata = {
  title: "About Us | SimplITechie",
  description: "We build with purpose. Engineered to last.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background selection:bg-accent selection:text-accent-foreground">
      <AboutHero />
      <WhatWeBelieve />
      <OurApproach />
      <WhatWeBuild />
      <OurWork />
      <TechnologyStack />
      <div className="px-4 md:px-6 lg:px-8 pb-24 md:pb-32 pt-12 md:pt-16 max-w-7xl mx-auto w-full">
        <AboutCta />
      </div>
    </div>
  );
}

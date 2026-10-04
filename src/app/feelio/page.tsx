import { FeelioHero } from "@/components/feelio/FeelioHero";
import { FeelioIntro } from "@/components/feelio/FeelioIntro";
import { FeelioFeatures } from "@/components/feelio/FeelioFeatures";
import { FeelioShowcase } from "@/components/feelio/FeelioShowcase";
import { FeelioHowItWorks } from "@/components/feelio/FeelioHowItWorks";
import { FeelioTrust } from "@/components/feelio/FeelioTrust";
import { FeelioCta } from "@/components/feelio/FeelioCta";

export const metadata = {
  title: "Feelio — Understand How You Feel",
  description: "Feelio is a simple space to check in with yourself, reflect on your day, and better understand your emotional patterns.",
  alternates: {
    canonical: "https://simplitechie.com/feelio/",
  },
};

export default function FeelioHomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <FeelioHero />
      <FeelioIntro />
      <FeelioFeatures />
      <FeelioShowcase />
      <FeelioHowItWorks />
      <FeelioTrust />
      <FeelioCta />
    </div>
  );
}

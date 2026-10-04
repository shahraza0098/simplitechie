import { Services } from "@/components/Services";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Services | SimplITechie",
  description: "Software that solves real problems. From first prototype to production-ready platform.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-foreground max-w-4xl">
            Engineering services for digital products.
          </h1>
        </div>
      </div>
      <Services />
      <CtaSection />
      <Footer />
    </div>
  );
}

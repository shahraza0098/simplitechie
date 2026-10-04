import { SelectedWork } from "@/components/SelectedWork";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Work | SimplITechie",
  description: "A selection of digital products and platforms we've designed and engineered.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-foreground max-w-3xl">
            Products we have engineered.
          </h1>
        </div>
      </div>
      <SelectedWork />
      <CtaSection />
      <Footer />
    </div>
  );
}

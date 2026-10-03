import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { SelectedWork } from "@/components/SelectedWork";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";

import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* 
        BASIC HOMEPAGE SHELL 
        This is a placeholder structure to verify the global design system.
        The full cinematic 3D hero and scroll animations will be implemented in the next phase.
      */}
      
      <Hero />
      <Capabilities />
      <SelectedWork />
      <Process />
      <Services />
      <Approach />

      <Footer />
      
    </div>
  );
}

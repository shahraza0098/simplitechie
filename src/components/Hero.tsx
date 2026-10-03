import { HeroBackground } from "./hero/HeroBackground";
import { HeroContent } from "./hero/HeroContent";
import { HeroVisual } from "./hero/HeroVisual";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-background">
      <HeroBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-between pt-[7rem] pb-20 md:pb-24">
        
        {/* Left: Content */}
        <div className="w-full lg:w-[48%] flex-shrink-0 relative z-20">
          <HeroContent />
        </div>

        {/* Right: Visual */}
        <div className="w-full lg:w-[48%] mt-4 md:mt-8 lg:mt-0 flex-1 relative z-10">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
}

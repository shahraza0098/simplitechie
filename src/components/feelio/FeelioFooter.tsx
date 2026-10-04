import Link from "next/link";

export function FeelioFooter() {
  return (
    <footer className="bg-[#FAFCFF] dark:bg-[#050914] pt-20 pb-10 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-[#208AEF] flex items-center justify-center">
                 <span className="text-white font-bold text-sm leading-none -mt-0.5">f</span>
              </div>
              <span className="font-semibold tracking-tight text-lg text-foreground">Feelio</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed font-light">
              A simple space to check in with yourself, reflect on your day, and understand your emotional patterns.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="text-[11px] font-mono text-foreground/50 uppercase tracking-widest font-semibold">Product</h4>
            <Link href="#features" className="text-sm text-foreground/70 hover:text-[#208AEF] transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm text-foreground/70 hover:text-[#208AEF] transition-colors">How It Works</Link>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="text-[11px] font-mono text-foreground/50 uppercase tracking-widest font-semibold">Legal</h4>
            <Link href="/feelio/privacy" className="text-sm text-foreground/70 hover:text-[#208AEF] transition-colors">Privacy Policy</Link>
            <Link href="/feelio/account-deletion" className="text-sm text-foreground/70 hover:text-[#208AEF] transition-colors">Account Deletion</Link>
          </div>

          <div className="flex flex-col gap-4 lg:ml-auto">
            <h4 className="text-[11px] font-mono text-foreground/50 uppercase tracking-widest font-semibold">Company</h4>
            <a href="https://simplitechie.com/" className="text-sm text-foreground/70 hover:text-[#208AEF] transition-colors">SimpliTechie</a>
          </div>

        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40">
            &copy; 2026 SimpliTechie. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
             <span className="text-xs text-foreground/40">Made with care.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ReactNode } from "react";
import { FeelioNavbar } from "@/components/feelio/FeelioNavbar";
import { FeelioFooter } from "@/components/feelio/FeelioFooter";

export default function FeelioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD] dark:bg-[#0B1320] text-foreground selection:bg-[#208AEF] selection:text-white font-sans">
      <FeelioNavbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <FeelioFooter />
    </div>
  );
}

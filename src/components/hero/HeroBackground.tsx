"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      {/* Extremely subtle radial gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/[0.03] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/[0.03] blur-[100px]" />
      
      {/* Light Mode Grid (Black fill, very low opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:hidden" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to bottom, black 10%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 50%)'
        }} 
      />
      
      {/* Dark Mode Grid (White fill, even lower opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.015] hidden dark:block" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to bottom, black 10%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 50%)'
        }} 
      />
    </div>
  );
}

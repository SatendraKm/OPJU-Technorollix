// app/(functionality)/layout.tsx
import { ReactNode } from "react";

export default function FunctionalityLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full min-h-screen pt-28 pb-10 bg-[#b22222]">
      {children}
    </div>
  );
}

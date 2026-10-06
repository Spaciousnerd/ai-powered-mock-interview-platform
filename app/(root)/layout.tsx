import Link from "next/link";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-">
          <img src="/logo.svg" alt="Logo image" className="h-12 w-auto" />
          <h2 className="text-primary-100">Hiresense</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;

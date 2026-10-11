import { isAutheticated } from "@/action/auth.action";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAutheticated();
  if (!isUserAuthenticated) redirect("/sign-in");
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

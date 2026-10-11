import { isAutheticated } from "@/action/auth.action";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAutheticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;

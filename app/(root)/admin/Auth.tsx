"use client";

import { LOGIN_COOKIE } from "@/constants";
import { redirect } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const [cookies] = useCookies([LOGIN_COOKIE]);

  if (!cookies[LOGIN_COOKIE]) {
    redirect("/login");
  }

  return <>{children}</>;
};

export default Auth;

"use client";

import React from "react";

const Auth = ({ children }: { children: React.ReactNode }) => {
  // Temporary disabled
  // const [cookies] = useCookies([LOGIN_COOKIE]);

  // if (!cookies[LOGIN_COOKIE]) {
  //   redirect("/login");
  // }

  return <>{children}</>;
};

export default Auth;

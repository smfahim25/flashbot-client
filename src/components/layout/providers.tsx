"use client";
import React from "react";
import { ThemeProvider } from "../theme-provider";
// import ThemeProvider from "./ThemeToggle/theme-provider";
// import { SessionProvider, SessionProviderProps } from 'next-auth/react';
export default function Providers({
  // session,
  children,
}: {
  // session: SessionProviderProps['session'];
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>{children}</SessionProvider>
      </ThemeProvider> */}
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}


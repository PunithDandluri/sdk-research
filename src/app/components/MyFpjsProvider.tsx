"use client";

import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import { PropsWithChildren } from "react";

export function MyFpjsProvider({ children }: PropsWithChildren) {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: process.env.NEXT_PUBLIC_FPJS_API_KEY || "",
      }}>
      {children}
    </FpjsProvider>
  );
}

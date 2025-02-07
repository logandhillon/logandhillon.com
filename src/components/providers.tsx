"use client";

import { HeroUIProvider } from "@heroui/react";
import { FC, ReactNode } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <HeroUIProvider>{children}</HeroUIProvider>
);

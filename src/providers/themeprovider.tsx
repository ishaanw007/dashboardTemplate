"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ColorThemeProvider } from "./ColorThemeProvider"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    <ColorThemeProvider>
      {children}
    </ColorThemeProvider>
  </NextThemesProvider>
}

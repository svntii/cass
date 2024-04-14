"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { FC } from "react"

export const Providers: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}

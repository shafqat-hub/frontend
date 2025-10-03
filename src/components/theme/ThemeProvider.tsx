"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"      // puts "dark" on <html>
      defaultTheme="light"
      enableSystem={false}   // you can change to true later if you want OS theme
    >
      {children}
    </NextThemesProvider>
  )
}

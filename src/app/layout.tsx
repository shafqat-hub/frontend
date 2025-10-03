import type { Metadata } from "next"
import "./globals.css"
import ThemeProvider from "@/components/theme/ThemeProvider"

export const metadata: Metadata = {
  title: "Zoom Homes App",
  description: "Interior design and fit-out dashboard",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

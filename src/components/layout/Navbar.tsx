"use client"

import { Bell, Menu, Moon, Search, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function Navbar({ onOpenSidebar }: { onOpenSidebar?: () => void }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null   // avoid hydration mismatch

  const isDark = theme === "dark"

  return (
    <header className="sticky top-0 z-30 border-b 
      bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-neutral-200
      dark:bg-darkblack-700/80 dark:border-darkblack-400">
      <div className="flex h-14 items-center gap-3 px-3 md:px-5">
        {/* mobile hamburger */}
        <button
          onClick={onOpenSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-darkblack-400 md:hidden"
        >
          <Menu className="h-5 w-5 text-neutral-700 dark:text-bgray-300" />
        </button>

        {/* search (desktop) */}
        <div className="relative hidden md:block md:min-w-[360px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-bgray-500" />
          <input
            className="h-9 w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-300
            dark:border-darkblack-400 dark:bg-darkblack-700 dark:text-bgray-50 dark:placeholder:text-bgray-500"
            placeholder="Search…"
          />
        </div>

        {/* right actions */}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-darkblack-400"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-neutral-700 dark:text-bgray-300" />}
          </button>

          <button className="relative inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-darkblack-400">
            <Bell className="h-5 w-5 text-neutral-700 dark:text-bgray-300" />
            <span className="absolute right-1 top-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </button>

          <div className="ml-1 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700" />
        </div>
      </div>
    </header>
  )
}

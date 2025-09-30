"use client"

import { Home, Users, Bell, Menu, Moon, Sun, Search } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar({ onOpenSidebar }: { onOpenSidebar?: () => void }) {
  // simple dark-mode toggler using the <html class="dark"> strategy
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  useEffect(() => {
    // initialize from localStorage on first mount
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    if (saved === "dark") setDark(true)
  }, [])

  return (
    <header className="sticky top-0 z-30 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800 dark:bg-neutral-900/70">
      <div className="flex h-14 items-center gap-3 px-3 md:px-5">
        {/* Mobile menu */}
        <button
          onClick={onOpenSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search */}
        <div className="relative hidden md:block md:min-w-[360px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            className="h-9 w-full rounded-md border border-neutral-200 bg-white pl-9 pr-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            placeholder="Search…"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDark((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Notifications (placeholder) */}
          <button
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </button>

          {/* Avatar (placeholder) */}
          <div className="ml-1 h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700" />
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import Sidebar from "@/components/layout/Sidebar"
import Navbar from "@/components/layout/Navbar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        <Navbar setMobileOpen={setMobileOpen} />
        <main className="flex-1 p-6 bg-neutral-100 dark:bg-neutral-900">
          {children}
        </main>
      </div>
    </div>
  )
}

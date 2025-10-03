"use client"

import { useState } from "react"
import Sidebar from "@/components/layout/Sidebar"
import Navbar from "@/components/layout/Navbar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // mobile drawer (small screens)
  const [mobileOpen, setMobileOpen] = useState(false)
  // desktop collapse (BankCo-like)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen bg-neutral-100 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main column */}
      <div className="flex min-h-screen w-full flex-col">
        <Navbar onOpenSidebar={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto w-full max-w-screen-2xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

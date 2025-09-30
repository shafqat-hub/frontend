"use client"

import Link from "next/link"
import { LayoutDashboard, Users, FolderOpen, FileText, BarChart3, Settings } from "lucide-react"

export default function Sidebar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (open: boolean) => void }) {
  return (
    <aside
      className={`
        ${mobileOpen ? "block" : "hidden"}
        md:block
        w-64 bg-neutral-900 text-neutral-100 min-h-screen p-6
      `}
    >
      {/* Logo */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-bold">Zoom Homes</h1>
        <button
          className="md:hidden text-neutral-400 hover:text-neutral-200"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center gap-3 text-neutral-300 hover:text-white">
          <LayoutDashboard className="h-5 w-5" />
          Dashboard
        </Link>

        <Link href="/projects" className="flex items-center gap-3 text-neutral-300 hover:text-white">
          <FolderOpen className="h-5 w-5" />
          Projects
        </Link>

        <Link href="/clients" className="flex items-center gap-3 text-neutral-300 hover:text-white">
          <Users className="h-5 w-5" />
          Clients
        </Link>

        <Link href="/files" className="flex items-center gap-3 text-neutral-300 hover:text-white">
          <FileText className="h-5 w-5" />
          Files
        </Link>

        <Link href="/analytics" className="flex items-center gap-3 text-neutral-300 hover:text-white">
          <BarChart3 className="h-5 w-5" />
          Analytics
        </Link>

        <Link href="/settings" className="flex items-center gap-3 text-neutral-300 hover:text-white">
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </nav>
    </aside>
  )
}

"use client"

import { Menu } from "lucide-react"

type NavbarProps = {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ setMobileOpen }: NavbarProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-neutral-900 shadow">
      {/* Hamburger Menu */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="p-2 rounded-md border hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* App Title */}
      <h1 className="font-bold text-lg">Zoom Homes Dashboard</h1>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Later: Notifications, Profile Avatar, etc. */}
      </div>
    </div>
  )
}

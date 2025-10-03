"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FolderOpen,
  Users,
  FileText,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

type SidebarProps = {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
  collapsed: boolean
  setCollapsed: (v: boolean) => void
}

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const mainNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/clients", label: "Clients", icon: Users },
  { href: "/files", label: "Files", icon: FileText },
]

const secondaryNav: NavItem[] = [
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const pathname = usePathname()

  const Item = ({ item }: { item: NavItem }) => {
    const active = pathname === item.href
    const Icon = item.icon
    return (
      <Link
        href={item.href}
        className={[
          "group flex items-center gap-3 rounded-md px-3 py-2 text-sm",
          active
            ? "bg-emerald-600/10 text-emerald-600 dark:text-emerald-400"
            : "text-neutral-600 hover:bg-neutral-100 dark:text-bgray-300 dark:hover:bg-darkblack-400",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      >
        <Icon
          className={[
            "h-5 w-5",
            active
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-bgray-50",
          ].join(" ")}
        />
        {!collapsed && <span className="truncate">{item.label}</span>}
      </Link>
    )
  }

  return (
    <aside
      className={`relative flex flex-col transition-all duration-200
        ${collapsed ? "w-20" : "w-64"}
        bg-white dark:bg-darkblack-600
        border-r border-neutral-200 dark:border-darkblack-400`}
    >
      {/* Header + collapse toggle */}
      <div className="relative flex h-14 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-600" />
          {!collapsed && (
            <span className="text-lg font-semibold tracking-tight dark:text-bgray-50">
              Zoom Homes
            </span>
          )}
        </Link>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 hidden h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white shadow hover:bg-emerald-700 md:flex"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Nav sections */}
      <div className="flex-1 px-3 pb-4">
        {!collapsed && (
          <div className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-bgray-500">
            Main
          </div>
        )}
        <nav className="space-y-1">{mainNav.map((n) => <Item key={n.href} item={n} />)}</nav>

        {!collapsed && (
          <div className="mt-4 px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-bgray-500">
            Insights & Settings
          </div>
        )}
        <nav className="space-y-1">{secondaryNav.map((n) => <Item key={n.href} item={n} />)}</nav>
      </div>
    </aside>
  )
}

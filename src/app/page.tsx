"use client"

import { useState } from "react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Logging in with:", { email, password })
    // later: hook into NextAuth or custom backend
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-emerald-500 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-8 w-full max-w-sm space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-100">
          Zoom Homes Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

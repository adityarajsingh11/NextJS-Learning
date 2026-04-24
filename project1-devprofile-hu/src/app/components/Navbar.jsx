"use client"
import Link from "next/link"

export default function Navbar({ toggle, dark }) {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-200 dark:bg-gray-900 transition">

      {/* Logo */}
      <h2 className="font-bold text-lg">
        DevProfile 🚀
      </h2>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About</Link>
        <Link href="/profile" className="hover:text-blue-500">Profile</Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggle}
          className="px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

    </nav>
  )
}
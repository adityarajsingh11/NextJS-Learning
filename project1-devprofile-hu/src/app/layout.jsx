"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./globals.css"

export default function RootLayout({ children }) {

  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white transition">

        <Navbar toggle={() => setDark(!dark)} dark={dark} />

        <main className="flex-1 p-5">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}
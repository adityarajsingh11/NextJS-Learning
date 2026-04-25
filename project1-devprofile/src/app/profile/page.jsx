"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfileHome() {

  const [username, setUsername] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (username.trim() !== "") {
      router.push(`/profile/${username}`)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black px-4">

      {/* Card */}
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center">

        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">
          🔍 Find Profile
        </h1>

        <p className="text-gray-500 dark:text-gray-300 text-sm">
          Enter a username to view profile
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit()
          }}
          className="w-full mt-5 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Go to Profile 🚀
        </button>

      </div>

    </div>
  )
}
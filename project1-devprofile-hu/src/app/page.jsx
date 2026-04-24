import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">

      <div className="text-center max-w-2xl">

        {/* Badge */}
        <span className="bg-white/10 px-4 py-1 rounded-full text-sm">
          🚀 Next.js Project
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold mt-4 leading-tight">
          Build Your <span className="text-blue-500">Dev Profile</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg mt-4">
          Create, explore, and showcase developer profiles with modern UI and powerful Next.js features.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">

          <Link href="/profile/aditya">
            <button className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg">
              View Profile
            </button>
          </Link>

          <Link href="/about">
            <button className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </Link>

        </div>

        {/* Image */}
        <div className="mt-12 flex justify-center">
          <Image
            src="/next.svg"
            alt="Next Logo"
            width={280}
            height={140}
            className="opacity-90"
          />
        </div>

      </div>

    </div>
  )
}
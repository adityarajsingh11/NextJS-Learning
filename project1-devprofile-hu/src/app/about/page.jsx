import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-center">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-3">
        About DevProfile Hub 🚀
      </h1>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-300 text-lg">
        DevProfile Hub is a simple Next.js project where users can explore and
        showcase developer profiles using modern web technologies.
      </p>

      {/* Image */}
      <div className="mt-8 flex justify-center">
        <Image
          src="/next.svg"
          alt="Next Logo"
          width={220}
          height={120}
          className="opacity-90"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-8"></div>

      {/* Learnings Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          What I Learned
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
          <li className="bg-gray-100 dark:bg-gray-800 py-2 rounded-md">✔️ App Routing</li>
          <li className="bg-gray-100 dark:bg-gray-800 py-2 rounded-md">✔️ Layout (Navbar + Footer)</li>
          <li className="bg-gray-100 dark:bg-gray-800 py-2 rounded-md">✔️ Dynamic Routing</li>
          <li className="bg-gray-100 dark:bg-gray-800 py-2 rounded-md">✔️ Image Optimization</li>
          <li className="bg-gray-100 dark:bg-gray-800 py-2 rounded-md">✔️ Navigation using Link</li>
        </ul>
      </div>

      {/* Button */}
      <div className="mt-8">
        <Link href="/profile/aditya">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
            View Profile 🚀
          </button>
        </Link>
      </div>

    </div>
  )
}
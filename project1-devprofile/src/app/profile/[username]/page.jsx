import Image from "next/image"

export default async function Page({ params }) {

  const { username } = await params

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black px-4">

      {/* Card */}
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center">

        {/* Avatar */}
        <div className="flex justify-center">
          <Image
            src="/user.png"
            alt="profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Username */}
        <h2 className="mt-4 text-2xl font-bold">
          {username}
        </h2>

        {/* Bio */}
        <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
          MERN Stack Developer 🚀
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div>
            <p className="font-semibold">120</p>
            <p className="text-gray-500 dark:text-gray-400">Followers</p>
          </div>
          <div>
            <p className="font-semibold">80</p>
            <p className="text-gray-500 dark:text-gray-400">Following</p>
          </div>
          <div>
            <p className="font-semibold">15</p>
            <p className="text-gray-500 dark:text-gray-400">Projects</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs">React</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs">Node.js</span>
        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
          Follow 🚀
        </button>

      </div>

    </div>
  )
}
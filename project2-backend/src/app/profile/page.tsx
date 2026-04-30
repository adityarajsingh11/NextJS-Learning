

// 'use client'
// import { signOut } from 'next-auth/react'
// import React, { useContext, useState } from 'react'
// import Image from 'next/image'
// import { HiPencil } from "react-icons/hi2";
// import { useRouter } from 'next/navigation';
// import { userDataContext } from '@/context/UserContext';
// function Page() {
  
// const data=useContext(userDataContext)
//   const router =useRouter()
//   const [loading,setLoading]=useState(false)

//   const handleSignOut=async ()=>{
//     setLoading(true)
//     try {
//       await signOut()
//       setLoading(false)
//     } catch (error) {
//       setLoading(false)
//     }
//   }
//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 '>
//       {data &&
//         <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center'>
//           <HiPencil size={22} color='white' className='absolute right-[20px] top-[20px] cursor-pointer' onClick={()=>router.push("/edit")}/>
//            {data.user?.image && <div className='relative w-[200px] h-[200px] rounded-full border-2 border-white overflow-hidden'>
//             <Image src={data.user.image} fill alt='userImage'/>
//             </div>}
//             <h1 className='text-2xl font-semibold my-4'>Welcome, {data.user?.name}</h1>
//             <button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors' onClick={handleSignOut}>Sign Out</button>
//         </div>}
//       {!data && <div className='text-white text-2xl'>Loading...</div>}

//     </div>
//   )
// }

// export default Page


'use client'

import { signOut } from 'next-auth/react'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { HiPencil } from "react-icons/hi2";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { userDataContext } from '@/context/UserContext';

export default function Page() {

  const data = useContext(userDataContext)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    await signOut()
    setLoading(false)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white px-4 relative overflow-hidden'>

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl top-[-80px] left-[-80px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl bottom-[-80px] right-[-80px]"></div>

      {data ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className='relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl text-center flex flex-col items-center'
        >

          {/* Edit Icon */}
          <HiPencil
            size={22}
            className='absolute right-5 top-5 cursor-pointer hover:text-blue-400 transition'
            onClick={() => router.push("/edit")}
          />

          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='relative w-[140px] h-[140px] rounded-full border-2 border-white overflow-hidden mb-4'
          >
            {data.user?.image && (
              <Image src={data.user.image} fill alt='userImage' />
            )}
          </motion.div>

          {/* Name */}
          <h1 className='text-2xl font-semibold mb-4'>
            Welcome, {data.user?.name}
          </h1>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className='w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold'
            onClick={handleSignOut}
          >
            {loading ? "Signing out..." : "Sign Out"}
          </motion.button>

        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity }}
          className='text-xl'
        >
          Loading...
        </motion.div>
      )}
    </div>
  )
}
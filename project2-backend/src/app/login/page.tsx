// 'use client'


// import React from 'react'
// import { FcGoogle } from "react-icons/fc";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { signIn, useSession } from 'next-auth/react';

// function Login() {
    
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const router = useRouter()
    

//     const handleSignIn=async (e:React.FormEvent)=>{
//         e.preventDefault()
//         try {
//             const result=await signIn('credentials',{
//               email,password,redirect:false
//             })
//             // console.log(result)
//             router.push("/")
//         } catch (error) {
//             console.log(error)
//         }

//       }

    
//   return (
//     <div className='min-h-screen flex items-center justify-center bg-black text-white px-4'> 
//         <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900'>
//             <h1 className='text-2xl font-semibold text-center mb-6'>Login</h1>
            
//             <form className='space-y-6' onSubmit={handleSignIn} >

//                 <div>
//                 <label className='block mb-1 font-medium'>Email</label>
//                 <input 
//                 type='text' 
//                 placeholder='Enter Email'
//                 className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 ></input>
//                 </div>

//                 <div>
//                 <label className='block mb-1 font-medium'>Password</label>
//                 <input 
//                 type='password' 
//                 placeholder='Enter Password'
//                 className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//                 ></input>
//                 </div>

                
//                 <p className='text-sm text-center mt-1' onClick={() => router.push("/register")}>Want to Create an account ? <span className='text-blue-400 hover:underline'>Register</span></p>



//                 <button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>Login</button>
//             </form>

//             <div className='flex items-center gap-[5px]     justify-center my-5'>
//                 <hr className="flex-grow border-gray-500" />
//                 <span>OR</span>
//                 <hr className="flex-grow border-gray-500" />
//             </div>

//             <button className='w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors'
//             onClick={async ()=> {
//                 await signIn('google',{
//                     callbackUrl:"/"
//                 })
//             }}
//             >
//                 <FcGoogle />
//                 <span >Sign In With Google</span>
//             </button>


//         </div>
//     </div>
//   )
// }

// export default Login


'use client'

import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.ok) {
      router.push("/")
    }
  }

  return (
    <div className='min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center px-4 relative overflow-hidden'>

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 opacity-20 blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 opacity-20 blur-3xl bottom-[-100px] right-[-100px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl z-10'
      >

        <h1 className='text-3xl font-bold text-center mb-6'>
          Welcome Back 👋
        </h1>

        <form className='space-y-5' onSubmit={handleSignIn}>

          {/* Email */}
          <div>
            <label className='block text-sm mb-1 text-gray-400'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              className='w-full p-2 rounded bg-[#111827] outline-none border border-transparent focus:border-indigo-500'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password + Eye */}
          <div className='relative'>
            <label className='block text-sm mb-1 text-gray-400'>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder='Enter Password'
              className='w-full p-2 pr-10 rounded bg-[#111827] outline-none border border-transparent focus:border-indigo-500'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {/* 👁️ Eye */}
            <div
              className='absolute right-3 top-[36px] cursor-pointer text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {/* Register link */}
          <p
            className='text-sm text-center text-gray-400 cursor-pointer'
            onClick={() => router.push("/register")}
          >
            Don’t have an account?{" "}
            <span className='text-indigo-400 hover:underline'>Register</span>
          </p>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 font-medium'
          >
            Login
          </motion.button>
        </form>

        {/* Divider */}
        <div className='flex items-center gap-3 my-6'>
          <hr className="flex-grow border-gray-600" />
          <span className='text-gray-400 text-sm'>OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={async () => {
            await signIn('google', { callbackUrl: "/" })
          }}
          className='w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition'
        >
          <FcGoogle />
          Continue with Google
        </motion.button>

      </motion.div>
    </div>
  )
}

export default Login
// 

'use client'

import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post('/api/auth/register', {
        name, email, password
      })

      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center px-4 relative overflow-hidden'>

      {/* 🌈 Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 opacity-20 blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 opacity-20 blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* 🧠 Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl z-10'
      >

        {/* 🔥 Title */}
        <h1 className='text-3xl font-bold text-center mb-6'>
          Create Account 🚀
        </h1>

        {/* 📄 Form */}
        <form className='space-y-5' onSubmit={handleRegister}>

          {/* Name */}
          <div>
            <label className='block text-sm mb-1 text-gray-400'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='w-full p-2 rounded bg-[#111827] outline-none border border-transparent focus:border-indigo-500'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

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

          {/* Password with Eye */}
          <div className='relative'>
            <label className='block text-sm mb-1 text-gray-400'>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder='Enter Password'
              className='w-full p-2 pr-10 rounded bg-[#111827] outline-none border border-transparent focus:border-indigo-500'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {/* 👁️ Eye Icon */}
            <div
              className='absolute right-3 top-[36px] cursor-pointer text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {/* Login Link */}
          <p
            className='text-sm text-center text-gray-400 cursor-pointer'
            onClick={() => router.push("/login")}
          >
            Already have an account?{" "}
            <span className='text-indigo-400 hover:underline'>Login</span>
          </p>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 font-medium'
          >
            Register
          </motion.button>

        </form>

        {/* Divider */}
        <div className='flex items-center gap-3 my-6'>
          <hr className="flex-grow border-gray-600" />
          <span className='text-gray-400 text-sm'>OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Google Signup */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={async () => {
            await signIn('google', { callbackUrl: "/" })
          }}
          className='w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition'
        >
          <FcGoogle />
          Sign up with Google
        </motion.button>

      </motion.div>
    </div>
  )
}

export default Register
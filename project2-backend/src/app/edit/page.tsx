


// 'use client'

// import { useSession } from 'next-auth/react'
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import { CgProfile } from "react-icons/cg";
// import axios from 'axios';

// import { userDataContext } from '@/context/UserContext';
// function Page() {
//  const data=useContext(userDataContext)
//     const [name, setName] = useState("")
//     const [frontendImage,setFrontendImage]=useState("")
//     const [backendImage,setBackendImage]=useState<File>()
//     const imageInput=useRef<HTMLInputElement>(null)
//     const [loading,setLoading]=useState(false)

//    const handleImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
// const files=e.target.files
// if(!files || files.length==0) return
//  const file=files[0]
//  setBackendImage(file)
// setFrontendImage(URL.createObjectURL(file))
//    }

//    const handleSubmit=async (e:React.FormEvent)=>{
// e.preventDefault()
// setLoading(true)
// try {
//     const formData=new FormData()
//     formData.append("name",name)
//     if(backendImage){
//         formData.append('file',backendImage)
//     }
//     const result=await axios.post('/api/edit',formData)
//     setLoading(false)
//    data?.setUser(result.data)
// } catch (error) {
//     console.log(error)
//     setLoading(false)
// }
//    }



//     useEffect(() => {
//         if (data) {
//             setName(data?.user?.name as string)
//             setFrontendImage(data.user?.image as string)
//         }
//     }, [data])
//     return (
//         <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 '>
//             <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg'>
//                 <h1 className='text-2xl font-semibold text-center mb-2'>Edit Profile</h1>
//                 <form className='space-y-2 flex flex-col w-full items-center' onSubmit={handleSubmit}>
//                     <div className='w-[100px] h-[100px] rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative' onClick={()=>imageInput.current?.click()}>
//                         <input type="file" accept='image/*' hidden ref={imageInput} onChange={handleImage}/>
//                         {frontendImage ? <Image src={frontendImage} fill alt='image' /> : <CgProfile size={22} color='white' />}
//                     </div>
//                     <div className='w-full '>
//                         <label className='block mb-1 font-medium'>Name</label>
//                         <input
//                             type="text"
//                             placeholder='Enter Name'
//                             className='w-full border-b border-white py-2 px-1 bg-black text-white outline-none placeholder-gray-400'
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                         />
//                     </div>
//                     <button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors' disabled={loading}>{loading?"Saving...":"Save"}</button>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Page

'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
import { motion } from "framer-motion";
import { userDataContext } from '@/context/UserContext';

export default function Page() {

  const data = useContext(userDataContext)

  const [name, setName] = useState("")
  const [frontendImage, setFrontendImage] = useState("")
  const [backendImage, setBackendImage] = useState<File | null>(null)
  const imageInput = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)

  // ✅ Handle image selection (stable preview)
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const preview = URL.createObjectURL(file)

    setBackendImage(file)
    setFrontendImage(preview)
  }

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append("name", name)
    if (backendImage) formData.append("file", backendImage)

    try {
      const res = await axios.post('/api/edit', formData)
      data?.setUser(res.data)
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  // ✅ Set initial data ONLY ONCE (no blinking)
  useEffect(() => {
    if (data) {
      setName(data.user?.name || "")
    }
  }, [data])

  useEffect(() => {
    if (data && !backendImage) {
      setFrontendImage(data.user?.image || "")
    }
  }, [data, backendImage])

  // ✅ Cleanup object URL (memory leak fix)
  useEffect(() => {
    return () => {
      if (frontendImage?.startsWith("blob:")) {
        URL.revokeObjectURL(frontendImage)
      }
    }
  }, [frontendImage])

  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white px-4 relative overflow-hidden'>

      {/* Glow Background */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl top-[-80px] left-[-80px]"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl bottom-[-80px] right-[-80px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl'
      >

        <h1 className='text-2xl font-semibold text-center mb-6'>
          Edit Profile
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5'>

          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => imageInput.current?.click()}
            className='w-[120px] h-[120px] rounded-full border border-white/20 flex items-center justify-center overflow-hidden cursor-pointer relative'
          >
            <input
              type="file"
              hidden
              ref={imageInput}
              onChange={handleImage}
            />

            {frontendImage ? (
              <Image
                src={frontendImage}
                fill
                alt='profile'
                key={frontendImage} // 🔥 prevents flicker
                style={{ objectFit: "cover" }}
              />
            ) : (
              <CgProfile size={40} />
            )}
          </motion.div>

          {/* Name Input */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
            className='w-full px-4 py-2 bg-black border border-white/20 rounded-lg outline-none'
          />

          {/* Save Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className='w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold'
          >
            {loading ? "Saving..." : "Save Changes"}
          </motion.button>

        </form>

      </motion.div>
    </div>
  )
}
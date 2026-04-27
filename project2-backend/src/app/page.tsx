'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

function page() {
  const {data} = useSession()
  console.log(data)

  return (
    <div>page</div>
  )
}

export default page
import React from 'react'

async function page() {
  await new Promise((resolve) => setTimeout(resolve,2000))
  return (
    <div>
      Home Page
    </div>
  )
}

export default page 
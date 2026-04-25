// Note - ssr,ssg,isr yeh sirf server component ke liye hota hai, agar aap client component me use karenge to error dega, kyuki client component me yeh features available nahi hote hai.

// csr - client side rendering yeh react krta h , client compoent me hota hai, isme page load hone ke baad data fetch hota hai, aur user ko loading state dikhai deti hai, jaise ki react me hota hai, useEffect me data fetch krna.

import React from 'react'

async function page() {


  // ssr

  // let response = await fetch("http://localhost:3000/api/user",{
  //   cache:"no-store" // yeh isliye krte hai taki data hamesha fresh mile, aur cache se na aaye, kyuki nextjs me by default cache hota hai, aur agar aap chahte hai ki data hamesha fresh mile to cache ko disable krna padta hai.
  // })
  // let data = await response.json()
  // console.log("response",data)

  // ssg

  // let response = await fetch("http://localhost:3000/api/user",{
  //   cache:"force-cache" // yeh isliye krte hai taki data cache se aaye, aur page jaldi load ho, kyuki ssg me data build time pe fetch hota hai, aur uske baad cache se aata hai, to agar aap chahte hai ki data cache se aaye to cache ko enable krna padta hai.

  //   // agr upadte kiya tho data update nahi hoga, kyuki cache se aayega, to agar aap chahte hai ki data hamesha fresh mile to cache ko disable krna padta hai.
  // })

  // let data = await response.json()
  // console.log("response",data)

  // isr

  let response = await fetch("http://localhost:3000/api/user",{
    next:{
      revalidate:5 // yeh isliye krte hai taki data har 5 second me update ho, kyuki isr me data har 5 second me update hota hai, to agar aap chahte hai ki data har 5 second me update ho to revalidate ko set krna padta hai.
    }
  })
  let data = await response.json()
  console.log("response",data)


  return (
    <div>Home</div>
  )
}

export default page
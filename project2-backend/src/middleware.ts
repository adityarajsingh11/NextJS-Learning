import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'



 
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
    const {pathname}=req.nextUrl
    const publicRoutes = [
      "/home",
      "/login",
      "/register",
      "/api/auth",
      "/favicon.ico",
      "_next"
    ]
    if(publicRoutes.some(path=>pathname.startsWith(path))){
      return NextResponse.next()
    }
    
      const  token = await getToken({req,secret:process.env.NEXT_AUTH_SECRET})
      if(!token){
          const loginUrl = new URL("/home",req.url)
          loginUrl.searchParams.set("callbackUrl",req.url)
          return NextResponse.redirect(loginUrl)
          
       }
        return NextResponse.next()
    }


// export const config = {
//     matcher:"/((?!api|_next/static|_next/image|favicon.ico|node_modules).*"
// }

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
 

import { NextRequest } from "next/server";
import connectDb from "@/lib/db";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { NextResponse } from "next/server";
import User from "@/model/user.model";

export async function GET(req:NextRequest){
    try{
        await connectDb()
        const session=await getServerSession(authOptions)

        if (!session || !session.user.email || !session.user.id) {
            return NextResponse.json(
                { message: "user does not have session" },
                { status: 400 }
            )
        }
        const user = await User.findById(session.user.id).select("-password")

        if (!user) {
            return NextResponse.json(
                { message: "user not found" },
                { status: 400 }
            )
        }

        return NextResponse.json(
            user,
            {status:200}
        )

    }catch(error){
        return NextResponse.json(
                { message: `user get error ${error}` },
                { status: 500 }
        )
    }

    
}
import connectDb from "@/lib/db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try{
        const {name,email,password}=await request.json()
        await connectDb()

        let existUser = await User.findOne({email})
        if(existUser){
            return NextResponse.json(
                {message:"User already exists"},
                {status:400}
            )
        }

        if(password.length<6){
            return NextResponse.json(
                {message:"Password must be at least 6 characters long"},
                {status:400}
            )
        }

        const hashedPassword=await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword

        })

        return NextResponse.json(
            {message:"User created successfully",user},
            {status:201}
        )

    }catch(error){
        return NextResponse.json(
                {message:`Register error ${error}`},
                {status:500}
            )

    }

}

    // signup
    //    |
    // check exist user 
    //     |
    // password length check
    //     |
    // hash password
    //     |
    // uaer create
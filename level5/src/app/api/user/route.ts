// NextRequest and NextResponse are available in the global scope.

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name:"aditya",
        age:21
    })
}

export async function POST(request:NextRequest) {
    let {name,age} = await request.json()
    return NextResponse.json({
        name:name,
        age:age
    })
}
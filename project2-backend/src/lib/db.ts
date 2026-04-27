// express m kya hota h 
// step-1-connectDb function 
// step-2-define schema and model
//step3-mongoose.connect(mongodbUrl)

import { connect } from "mongoose"


let mongodbUrl=process.env.MONGODB_URL 
if(!mongodbUrl){
    throw new Error("MONGODB_URL environment variable is not set")
}

let cached= global.mongoose

if(!cached){
   cached=global.mongoose={conn:null,promise:null}
}



const connectDb=async()=>{
    console.log(" Cached DB connected")
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        cached.promise=connect(mongodbUrl).then((c)=>c.connection)
    }

    try{
       cached.conn=await cached.promise
       console.log("Promise DB connected")
    }catch(error){
        throw error

    }
    return cached.conn
}

export default connectDb


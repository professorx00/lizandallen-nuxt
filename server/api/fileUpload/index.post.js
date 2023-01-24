import fs from "fs";


export default defineEventHandler(async (event) => {
   try{
    console.log("Processing Upload")
    const body = await readBody(event)
    console.log("body", body)
   }catch(err){
        return {
            statusCode: 500,
            message: err.message
        }
   }
})
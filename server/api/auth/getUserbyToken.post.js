import { decodeT } from "~~/utils/jwt";
export default defineEventHandler(async (event) => {
    console.log("Fetching Data")
   try{
        const body = await readBody(event)
        const token = body
        const data = await decodeT(token)
        const returnData = {
            id: data.id,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName
        }
        return returnData
   }catch(err){
        return {
            statusCode: 401,
            message: err.message
        }
   }

})
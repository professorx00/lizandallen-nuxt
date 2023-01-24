import { verifyT } from "~~/utils/jwt";
export default defineEventHandler(async (event) => {
   try{
        const token = event.node.req.headers.accesstoken;
        const valid = await verifyT(token)
        if(valid){
            return true
        }
   }catch(err){
        return false
   }

})
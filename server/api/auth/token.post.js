import { decodeT } from "~~/utils/jwt";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const token = body;
    const data = await decodeT(token);
    const returnData = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
    };
    return returnData;
  } catch (err) {
    console.error(err.message);
    return {
      statusCode: 401,
      message: err.message,
    };
  }
});

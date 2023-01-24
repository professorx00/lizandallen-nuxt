import * as jwt from "jsonwebtoken";

// PRIVATE and PUBLIC key
const privateKEY = process.env.PRIVATE_KEY;

export const signing = async (payload, id) => {
  const newPayload = { ...payload, id };
  return await jwt.default.sign(newPayload, privateKEY);
};

export const verifyT = async (token) => {
  const validToken = await jwt.default.verify(token, privateKEY);
  
  if(validToken){
    return true
  }
  return false
};

export const decodeT = async (token) => {
  console.log("token", token);
  const validToken = await jwt.default.verify(token, privateKEY);
  if (validToken) {
    return validToken;
  }
  return null;
  //returns null if token is invalid
};

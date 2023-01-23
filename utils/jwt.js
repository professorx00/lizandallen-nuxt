import * as jwt from "jsonwebtoken";

// PRIVATE and PUBLIC key
var i = "LizandAllen"; // Issuer
var a = "lizandallen.com"; // Subject
const privateKEY = process.env.PRIVATE_KEY;

export const signing = async (payload, id) => {
  const newPayload = { ...payload, id };
  return jwt.default.sign(newPayload, privateKEY);
};

export const verifyT = async (token, email) => {
  var verifyOptions = {
    issuer: i,
    subject: email,
    audience: a,
    expiresIn: "24h",
    algorithm: ["RS256"],
  };
  return jwt.default.verify(token, privateKEY);
};

export const decodeT = async (token) => {
  return jwt.default.decode(token, { complete: true });
  //returns null if token is invalid
};

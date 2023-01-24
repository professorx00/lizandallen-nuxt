import db from "~~/stores/db";
import bcrypt from "bcrypt";
import { signing } from "~~/utils/jwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, firstName, lastName, phone} = body;
  const user = await db.users.findFirst({ where: { email } });
  if (user) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "User already exists" }),
    };
  } else {
    try{
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await db.users.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          phone
        },
      });
      const id = newUser.id;
      const token = await signing({ id,email, firstName, lastName }, id);
      await db.users.update({ where: { id: id }, data: { token: token } });
      return { token, id };
    }catch(err){
      return {
        statusCode: 400,
        body: JSON.stringify({error: err.message})
      }
    }
  }
});

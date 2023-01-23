import db from "~~/stores/db";
import bcrypt from "bcrypt";
import { signing } from "~~/utils/jwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, firstName, lastName } = body;
  const user = await db.users.findFirst({ where: { email } });
  console.log("user", user);
  if (user) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "User already exists" }),
    };
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await db.users.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });
    const id = newUser.id;
    const token = await signing({ email, firstName, lastName }, id);
    await db.users.update({ where: { id: id }, data: { token: token } });
    return { token, email };
  }
});

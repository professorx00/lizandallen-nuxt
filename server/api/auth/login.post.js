import db from '~~/stores/db'
import bcrypt from "bcrypt";
import { signing } from '~~/utils/jwt';


export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  const user = await db.users.findUnique({where: {
    email: email
  }})
  const {id,firstName,lastName, role} = user
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Params are incorrect",
    });
  } else {
    const compare =  await bcrypt.compare(password, user.password)
    if(compare){
      const token = await signing({ id, email, firstName, lastName, role }, id);
      return {token, id, email, firstName,lastName, role}
    }
  }
});
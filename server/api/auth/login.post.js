export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  console.log(email);
  const user = getUserByEmail(email);
  console.log(user);
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Params are incorrect",
    });
  } else {
    return user;
  }
});

const getUserByEmail = (email) => {
  if (email == "professorx00@gmail.com") {
    return {
      email: "professorx00@gmail.com",
      id: 1,
      firstName: "Charles",
      lastName: "Xavier",
      role: "admin",
    };
  }
};

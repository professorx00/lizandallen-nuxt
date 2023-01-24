export default defineEventHandler(async (event) => {
  let token = getCookie(event, "token");

  if (token) {
    deleteCookie(event, "token");
    return {
      statusCode: 200,
      message: "Logout successful",
    };
  } else {
    return {
      statusCode: 401,
      message: "You are not logged in",
    };
  }
});

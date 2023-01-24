import db from "~~/stores/db";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const body = await readBody(event);
  switch (method) {
    case "GET":
      const carts = await db.carts.findMany({ where: { status: "CREATED" } });
      return {
        carts: carts,
      };
    case "POST":
      return {};
    case "PUT":
      return {};
    case "DELETE":
      return {};
    default:
      return {
        statusCode: 405,
        message: "Method not allowed",
      };
  }
});

// Create New Cart

// create Cart Products

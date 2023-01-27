import db from "~~/stores/db";

export default defineEventHandler(async (event) => {
  const products = await db.products.findMany({ where: { isActive: true } });
  return products;
});

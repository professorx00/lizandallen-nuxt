import db from "~~/stores/db";
export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const product = await db.products.findFirst({ where: { id: parseInt(id) } });
  return product;
});

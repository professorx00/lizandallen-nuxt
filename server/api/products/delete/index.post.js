import db from "~~/stores/db";
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const updateProduct ={
    id: parseInt(body.id),
    isActive: false
  }
  const updated = await db.products.update({where: {id: parseInt(body.id)}, data: updateProduct})
  return updated
});

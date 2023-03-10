import db from "~~/stores/db";

export default defineEventHandler(async (event) => {
  const { id, name, price, description, image, imageAlt, inventory, isActive } =
    await readBody(event);
  const product = {
    id:parseInt(id),
    name,
    price: parseFloat(price),
    description,
    image,
    imageAlt,
    inventory: parseInt(inventory),
    isActive,
  };
  const updatedProduct = await db.products.update({
    where: { id: parseInt(id) },
    data: product,
  });
  return updatedProduct;
});

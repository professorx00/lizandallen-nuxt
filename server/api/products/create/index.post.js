import db from "~~/stores/db";

export default defineEventHandler(async (event) => {
  const { name, price, description, image, imageAlt, inventory, isActive } =
    await readBody(event);
  const product = {
    name,
    price: parseFloat(price),
    description,
    image,
    imageAlt,
    inventory: parseInt(inventory),
    isActive,
    updatedAt: new Date()
  };
  const newProduct = await db.products.create({
    data: product,
  });
  return newProduct;
});
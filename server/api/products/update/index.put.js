import db from "~~/stores/db";

export default defineEventHandler(async (event) => {
  const { id, name, price, description, image, imageAlt, inventory, isActive } =
    await readBody(event);
  const product = {
    id,
    name,
    price,
    description,
    image,
    imageAlt,
    inventory,
    isActive,
  };
  console.log(product);
  const updatedProduct = await db.products.update({
    where: { id: parseInt(id) },
    data: product,
  });
  console.log("updated", updatedProduct);
  return updatedProduct;
});

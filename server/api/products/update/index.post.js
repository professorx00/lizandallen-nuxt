import db from "~~/stores/db";

export default defineEventHandler(async (event) => {
  const { id, name, price, description, image, imageAlt, inventory, isActive } =
    await readBody(event);
  const product = {
    name,
    price: parseFloat(price),
    description,
    image,
    imageAlt,
    inventory: parseInt(inventory),
    isActive,
  };
  const found = await db.products.findFirst({where: name})
  if(found){
    return {
      statusCode: 400,
      message: "Item already exist with that name"
    }
  }
  const newProduct = await db.products.create({data: product});
  return newProduct;
});
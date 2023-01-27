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
});

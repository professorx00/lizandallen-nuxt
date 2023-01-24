const tempProducts = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    imageAlt: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    inventory: 10,
    isActive: true,
  },
  {
    id: 19,
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    imageAlt: "Opna Women's Short Sleeve Moisture",
    inventory: 10,
    isActive: true,
  },
  {
    id: 20,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    imageAlt: "DANVOUY Womens T Shirt Casual Cotton Short",
    inventory: 10,
    isActive: true,
  },
];

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const index = tempProducts.findIndex((product) => product.id == id);

  return tempProducts[index];
});

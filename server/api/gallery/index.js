const tempGallery = [
  {
    id: 1,
    name: "Gallery 1",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
  },
  {
    id: 2,
    name: "Gallery 2",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
  },
  {
    id: 3,
    name: "Gallery 3",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
  },
  {
    id: 4,
    name: "Gallery 4",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
  },
  {
    id: 5,
    name: "Gallery 5",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
  },
];

export default defineEventHandler(async (event) => {
  return tempGallery;
});

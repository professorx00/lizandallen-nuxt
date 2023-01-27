const tempGallery = [
  {
    id: 1,
    name: "Gallery 1",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 0
  },
  {
    id: 2,
    name: "Gallery 2",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 1
  },
  {
    id: 3,
    name: "Gallery 3",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 2
  },
  {
    id: 4,
    name: "Gallery 4",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 3
  },
  {
    id: 5,
    name: "Gallery 5",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 4
  },
];

export default defineEventHandler(async (event) => {
  return tempGallery;
});

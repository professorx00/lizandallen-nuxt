const tempGallery = [
  {
    id: 1,
    name: "Gallery 1",
    imgsrc: "https://via.placeholder.com/600.png/09f/fff",
    sort: 0,
  },
  {
    id: 2,
    name: "Gallery 2",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 1,
  },
  {
    id: 3,
    name: "Gallery 3",
    imgsrc: "https://via.placeholder.com/200x500.png/09f/fff",
    sort: 2,
  },
  {
    id: 4,
    name: "Gallery 4",
    imgsrc: "https://via.placeholder.com/450x620.png/fff",
    sort: 3,
  },
  {
    id: 5,
    name: "Gallery 5",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 4,
  },
  {
    id: 6,
    name: "Gallery 1",
    imgsrc: "https://via.placeholder.com/600.png/09f/fff",
    sort: 5,
  },
  {
    id: 7,
    name: "Gallery 2",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 6,
  },
  {
    id: 8,
    name: "Gallery 3",
    imgsrc: "https://via.placeholder.com/200x500.png/09f/fff",
    sort: 7,
  },
  {
    id: 9,
    name: "Gallery 4",
    imgsrc: "https://via.placeholder.com/450x620.png/fff",
    sort: 8,
  },
  {
    id: 10,
    name: "Gallery 5",
    imgsrc: "http://localhost:3000/_nuxt/assets/images/450.png",
    sort: 9,
  },
];

export default defineEventHandler(async (event) => {
  return tempGallery;
});

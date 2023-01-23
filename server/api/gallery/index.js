const tempGallery = [
  {
    id: 1,
    name: "Gallery 1",
    imgsrc: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Gallery 2",
    imgsrc: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Gallery 3",
    imgsrc: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Gallery 4",
    imgsrc: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Gallery 5",
    imgsrc: "https://picsum.photos/200/300",
  },
];

export default defineEventHandler(async (event) => {
  return tempGallery;
});

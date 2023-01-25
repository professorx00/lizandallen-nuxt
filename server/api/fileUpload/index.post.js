export default defineEventHandler(async (event) => {
  console.log(event.node.req.file);
  //    console.log(event.node.req);
});

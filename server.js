const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults({
  delay: 500,
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log("JSON Server is running on port", PORT);
});

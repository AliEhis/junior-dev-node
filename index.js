const server = require("./src/server");
const routes = require("./src/routes");

server.use("/", routes);
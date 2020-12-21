var PORT = process.env.PORT || 5000
const server = require("./src/server");
const routes = require("./src/routes");

server.use("/", routes);
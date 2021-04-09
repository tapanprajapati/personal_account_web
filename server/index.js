const express = require("express");
const bodyParser = require("body-parser");

const server = express();

const entryRoutes = require("./src/routes/entryRoutes");

server.use(bodyParser.json());

/**
 * Base route
 */
server.get("/", (req, res) => res.sendStatus(200));
server.use("/api/", entryRoutes);

server.listen(5001, () => {
  console.log("Server Running on 5001");
});

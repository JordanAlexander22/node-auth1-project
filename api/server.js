const express = require("express");
const server = express();
const cors = require("cors");
const session = require("express-session");
const registerRoute = require("../register/registerRoute");
const loginRoute = require("../login/loginRoutes");

server.use(cors());
server.use(session(sessionConfig));
server.use(express.json());
server.use("/api/register", registerRoute);
server.use("/api/login", loginRoute);

server.get("/", (req, res) => {
  res.send("<h1>test </h1>");
});

module.exports = server;

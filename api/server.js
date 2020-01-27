const express = require("express");
const server = express();
const registerRoute= require("../register/registerRoute");
//const bcrypt = require('bcrypt');

server.use(express.json());
server.use("/api/register", registerRoute);

server.get("/", (req, res) => {
  res.send("<h1>test </h1>");
});

module.exports = server;

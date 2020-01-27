const express = require("express");
const server = express();
//const bcrypt = require('bcrypt');

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>test </h1>");
});

module.exports = server;

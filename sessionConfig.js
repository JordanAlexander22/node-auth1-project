const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const dbConfig = require("./data/db-config");

module.exports = {
  name: "login",
  secret: "CONFIDENTIAL",
  cookie: {
    maxAge: 1 * 24 * 60 * 1000,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: dbConfig,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1 * 24 * 60 * 1000
  })
};
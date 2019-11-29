const { PORT, DATABASE_HOST_LIVE } = require("./environment");
const db = require("./connection");

module.exports = {
  PORT: PORT,
  DATABASE_HOST: DATABASE_HOST_LIVE,
  db: db
};

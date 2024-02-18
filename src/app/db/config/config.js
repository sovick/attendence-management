const { env } = require("../../config/env");

module.exports = {
  username: env.DB_UNAME,
  password: env.DB_PASS,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
};

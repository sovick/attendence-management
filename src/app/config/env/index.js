require("dotenv").config();

const PORT = process.env.PORT;

const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

const DB_PASS = process.env.DB_PASS;
const DB_UNAME = process.env.DB_UNAME;
const DB_DIALECT = process.env.DB_DIALECT;

module.exports = {
  env: {
    PORT,
    DB_NAME,
    DB_HOST,
    DB_UNAME,
    DB_PASS,
    DB_DIALECT,
  },
};

require("dotenv").config();

const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const HTTP_PORT = process.env.PORT;

const CONNECT_DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_URL = process.env.MONGO_URL;

module.exports = {
  HTTP_CODE,
  HTTP_PORT,
  CONNECT_DB_OPTIONS,
  DB_URL,
};

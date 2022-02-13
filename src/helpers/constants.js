require("dotenv").config();

const HttpCode = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

const HTTP_PORT = process.env.PORT;

const CONNECT_DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_URL = process.env.MONGO_URL;

module.exports = {
  HttpCode,
  HTTP_PORT,
  CONNECT_DB_OPTIONS,
  DB_URL,
};

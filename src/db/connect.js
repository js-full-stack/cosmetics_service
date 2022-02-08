const mongoose = require("mongoose");
const { DB_URL, CONNECT_DB_OPTIONS } = require("../helpers/constants");

const connectMongo = async () => {
  mongoose.connect(DB_URL, CONNECT_DB_OPTIONS);
  console.log("Database connection successful");
};

module.exports = { connectMongo };

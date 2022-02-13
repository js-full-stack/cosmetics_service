const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const { productsRouters } = require("./routers/productsRouters");
const { authRouter } = require("./routers/authRouters");

const { connectMongo } = require("./db/connect");
const { HTTP_PORT } = require("./helpers/constants");
const { errorHandler } = require("./helpers/errors");
const PORT = HTTP_PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/products", productsRouters);
app.use("/auth", authRouter);
app.use(errorHandler);

// server launch
(async () => {
  try {
    await connectMongo();
    app.listen(PORT, (error) => {
      if (error) console.log("error at server launch");
      console.log(`server work at port ${PORT}`);
    });
  } catch (error) {
    console.error(`failed to launch app with error: "${error.message}"`);
  }
})();

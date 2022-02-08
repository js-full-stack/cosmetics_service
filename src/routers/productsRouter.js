const express = require("express");
const router = express.Router();
const cors = require("cors");

const { asyncWrapper } = require("../helpers/apiHelpers");
const {
  fetchProductsController,
} = require("../controllers/cosmeticsStoreController");

router.get("/", asyncWrapper(fetchProductsController));

module.exports = { productsRouter: router };

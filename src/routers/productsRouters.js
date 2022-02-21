const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const guard = require("../helpers/guard");

const {
  getProducts,
  getProductsWithDiscount,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", asyncWrapper(getProducts));
router.get("/discount", asyncWrapper(getProductsWithDiscount));
router.get("/:id", asyncWrapper(getProductById));
router.post("/", guard, asyncWrapper(addProduct));
router.put("/:id", guard, asyncWrapper(updateProduct));
router.delete("/:id", guard, asyncWrapper(deleteProduct));

module.exports = { productsRouters: router };

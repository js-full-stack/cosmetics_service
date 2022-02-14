const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const guard = require("../helpers/guard");

const {
  fetchProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", asyncWrapper(fetchProducts));
router.get("/:id", asyncWrapper(getProductById));
router.post("/", guard, asyncWrapper(addProduct));
router.put("/:id", guard, asyncWrapper(updateProduct));
router.delete("/:id", guard, asyncWrapper(deleteProduct));
module.exports = { productsRouters: router };

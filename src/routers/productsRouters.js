const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const { authMiddlware } = require("../helpers/authMiddlware");

const {
  fetchProductsController,
  addProductController,
  getProductByIdController,
  updateProductByIdController,
  deleteProductByIdController,
} = require("../controllers/cosmeticsStoreController");

router.use(authMiddlware);

router.get("/", asyncWrapper(fetchProductsController));
router.get("/:id", asyncWrapper(getProductByIdController));
router.post("/", asyncWrapper(addProductController));
router.put("/:id", asyncWrapper(updateProductByIdController));
router.delete("/:id", asyncWrapper(deleteProductByIdController));
module.exports = { productsRouters: router };

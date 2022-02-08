const { fetchProductsService } = require("../services/cosmeticsStoreService");

const fetchProductsController = async (req, res) => {
  const products = await fetchProductsService();

  res.json({ products, message: "success" });
};

module.exports = { fetchProductsController };

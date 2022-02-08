const { Product } = require("../db/productsShema");

const fetchProductsService = async () => {
  const products = await Product.find({});
  return products;
};

module.exports = { fetchProductsService };

const { Product } = require("../db/productsShema");

const fetchProductsService = async () => {
  //* находим посты пользователя поле userId которого === переданному
  const products = await Product.find({});
  return products;
};

module.exports = { fetchProductsService };

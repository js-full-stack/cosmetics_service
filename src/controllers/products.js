const ProductsService = require("../services/products");

const productsService = new ProductsService();

const test = async (req, res) => {
  const result = await productsService.test(req.params.id);
  res.json({ result });
};

const getProducts = async (req, res) => {
  let { skip = 0, limit = 3, soryBy = "price", value = 1 } = req.query;
  limit = limit > 20 ? 20 : limit;
  const products = await productsService.getAll(skip, limit, soryBy, value);

  res.json({ message: "success", skip, limit, soryBy, value, products });
};

const getProductsWithDiscount = async (req, res) => {
  let { skip = 0, limit = 3 } = req.query;
  limit = limit > 20 ? 20 : limit;
  const products = await productsService.getAllWithDiscount(skip, limit);

  res.json({ products, message: "success" });
};

const getProductById = async (req, res) => {
  const { id: productId } = req.params;
  const product = await productsService.getById(productId);
  if (!product) {
    res.status(404).json(`product with id ${req.params.id} not found`);
  }
  res.json({ product, message: "success" });
};

const addProduct = async (req, res) => {
  const { _id: userId } = req.user;
  const {
    tag,
    category,
    brand,
    name,
    description,
    image,
    price,
    promotion,
    discount,
  } = req.body;
  await productsService.create(
    {
      tag,
      category,
      brand,
      name,
      description,
      image,
      price,
      promotion,
      discount,
    },
    userId
  );

  res.json({ message: "add new product" });
};

const updateProduct = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: productId } = req.params;
  const {
    tag,
    category,
    brand,
    name,
    description,
    image,
    price,
    promotion,
    discount,
  } = req.body;

  const updatedProduct = await productsService.update(
    productId,
    {
      tag,
      category,
      brand,
      name,
      description,
      image,
      price,
      promotion,
      discount,
    },
    userId
  );

  res.json({ updatedProduct });
};

const deleteProduct = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: productId } = req.params;

  try {
    await productsService.remove(productId, userId);

    res.json({ message: `product with id ${productId} was removed` });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  addProduct,
  getProductsWithDiscount,
  getProductById,
  updateProduct,
  deleteProduct,
  test,
};

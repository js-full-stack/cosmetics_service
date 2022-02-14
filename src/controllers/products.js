const ProductsService = require("../services/products");

const productsService = new ProductsService();

const fetchProducts = async (req, res) => {
  try {
    const products = await productsService.getAll();

    res.json({ products, message: "success" });
  } catch (error) {
    res.status(401).json(error.message);
  }
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

  res.json("add new product");
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
  fetchProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};

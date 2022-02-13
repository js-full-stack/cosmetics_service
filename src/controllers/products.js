const {
  fetchProductsService,
  addProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
} = require("../services/products");

const fetchProducts = async (req, res) => {
  try {
    const products = await fetchProductsService();

    res.json({ products, message: "success" });
  } catch (error) {
    res.status(401).json(error.message);
  }
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
  await addProductService(
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

const getProductById = async (req, res) => {
  const { _id: userId } = req.user;
  const { id: productId } = req.params;
  const product = await getProductByIdService(productId, userId);
  if (!product) {
    res.status(404).json(`product with id ${productId} not found`);
  }
  res.json({ product, message: "success" });
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

  const updatedProduct = await updateProductByIdService(
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
    await deleteProductByIdService(productId, userId);

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

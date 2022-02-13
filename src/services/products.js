const { Product } = require("../schemas/product");

const fetchProductsService = async () => {
  return await Product.find({});
};

const addProductService = async (
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
) => {
  const product = new Product({
    tag,
    category,
    brand,
    name,
    description,
    image,
    price,
    promotion,
    discount,
    userId,
  });
  await product.save();
  return product;
};

const getProductByIdService = async (id) => {
  return await Product.findById(id);
};

const updateProductByIdService = async (productId, productData, userId) => {
  return await Product.findOneAndUpdate(
    { _id: productId, userId },
    { $set: productData },
    { new: true }
  );
};

const deleteProductByIdService = async (productId, userId) => {
  const product = await Product.findOneAndDelete({ _id: productId, userId });
  if (!product) {
    return new Error(`product with id ${productId} was not found`);
  }
  return product;
};

module.exports = {
  fetchProductsService,
  addProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
};

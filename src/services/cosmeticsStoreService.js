const { Product } = require("../db/productsShema");

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

const updateProductByIdService = async (
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
) => {
  return await Product.findOneAndUpdate(
    { productId, userId },
    {
      $set: {
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
    }
  );
};

const deleteProductByIdService = async (postId, userId) => {
  return await Product.findOneAndDelete({ postId, userId });
};

module.exports = {
  fetchProductsService,
  addProductService,
  getProductByIdService,
  updateProductByIdService,
  deleteProductByIdService,
};

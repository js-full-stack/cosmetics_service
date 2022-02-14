const Product = require("../schemas/product");

class ProductRepository {
  constructor() {
    this.model = Product;
  }

  async getAll() {
    return await this.model.find({});
  }
  async getById(productId) {
    return await Product.findById({ _id: productId });
  }
  async create(body, userId) {
    return await this.model.create({ ...body, id: userId });
  }

  async update(productId, body, userId) {
    return await this.model.findOneAndUpdate(
      { _id: productId, id: userId },
      { $set: body },
      { new: true }
    );
  }
  async remove(productId, userId) {
    return await this.model.findOneAndDelete({
      _id: productId,
      id: userId,
    });
  }
}

module.exports = ProductRepository;

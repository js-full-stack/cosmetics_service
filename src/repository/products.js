const Product = require("../schemas/product");

class ProductRepository {
  constructor() {
    this.model = Product;
  }

  async getAll({ skip, limit, sortBy, value }) {
    return await this.model
      .find({})
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: value });
  }

  async getAllWithDiscount({ skip, limit }) {
    return await this.model.find({ promotion: true }).skip(skip).limit(limit);
  }

  async countProducts() {
    return await this.model.countDocuments();
  }

  async getById(productId) {
    return await this.model.findById({ _id: productId });
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

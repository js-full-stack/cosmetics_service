const Product = require("../schemas/product");

class ProductRepository {
  constructor() {
    this.model = Product;
  }

  async getAll() {
    return await this.model.find({});
  }
  async getById(id) {
    return await this.model.findOne({ _id: id });
  }
  async create(body, userId) {
    return await this.model.create({ ...body, owner: userId });
  }

  async update(id, body) {
    return await this.model.findByIdAndUpdate(
      { _id: id },
      { ...body },
      { new: true }
    );
  }
  async remove(id) {
    return await this.model.findByIdAndRemove({
      _id: id,
    });
  }
}

module.exports = ProductRepository;

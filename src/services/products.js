const { ProductsRepository } = require("../repository");

class ProductsService {
  constructor() {
    this.repositories = {
      products: new ProductsRepository(),
    };
  }

  async countProducts() {
    return await this.repositories.products.countProducts();
  }

  async getAll(skip, limit, sortBy, value) {
    return await this.repositories.products.getAll({
      skip,
      limit,
      sortBy,
      value,
    });
  }

  async getAllWithDiscount(skip, limit) {
    return await this.repositories.products.getAllWithDiscount({ skip, limit });
  }

  async getById(id) {
    return await this.repositories.products.getById(id);
  }

  async create(body, userId) {
    return await this.repositories.products.create(body, userId);
  }

  async remove(userId) {
    return await this.repositories.products.remove(userId);
  }

  async update(productId, body, userId) {
    return await this.repositories.products.update(productId, body, userId);
  }
}

module.exports = ProductsService;

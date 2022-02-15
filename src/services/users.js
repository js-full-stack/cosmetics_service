const { UsersRepository } = require("../repository");
const { User } = require("../schemas/user");

class UserService {
  constructor() {
    this.repositories = {
      users: new UsersRepository(),
    };
  }
  async register(body) {
    return await this.repositories.users.create(body);
  }

  async findByEmail(email) {
    return await this.repositories.users.findByEmail(email);
  }

  async findById(id) {
    return await this.repositories.users.findById(id);
  }
}

module.exports = UserService;

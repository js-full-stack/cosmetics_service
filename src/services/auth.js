const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersRepository = require("../repository/users");
const { CustomError } = require("../helpers/errors");
const { HttpCode } = require("../helpers/constants");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

class AuthService {
  constructor() {
    this.repositories = {
      users: new UsersRepository(),
    };
  }

  async login({ email, password }) {
    const user = await this.repositories.users.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new CustomError(HttpCode.UNAUTHORIZED, "Wrong email or password");
    }
    const id = user.id;
    const payload = { id };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "4h" });
    await this.repositories.users.updateToken(id, token);
    return token;
  }
  async logout(id) {
    const data = await this.repositories.users.updateToken(id, null);
    return data;
  }
}
module.exports = AuthService;

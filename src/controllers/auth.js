const { AuthService, UsersService } = require("../services");
const { HttpCode } = require("../helpers/constants");

const usersService = new UsersService();
const authService = new AuthService();

const register = async (req, res) => {
  const { email, password } = req.body;
  await usersService.register({ email, password });
  res.json({ message: "registration success" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login({ email, password });
    res.json({ token, email });
  } catch (error) {
    res.status(HttpCode.UNAUTHORIZED).json({ message: error.message });
  }
};

const getCurrentUser = async (req, res) => {
  const { token } = req.user;
  res.json({ token });
};

const logout = async (req, res) => {
  const id = req.user.id;
  await authService.logout(id);
  return res
    .status(HttpCode.NO_CONTENT)
    .json({ status: "success", code: HttpCode.NO_CONTENT });
};

module.exports = {
  register,
  login,

  logout,
  getCurrentUser,
};

const { regService, logService } = require("../services/authService");

const regController = async (req, res) => {
  const { email, password } = req.body;
  try {
    await regService(email, password);
    res.json({ message: "registration success" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(401).json("user with this email alredy exist");
    }
    res.status(401).json(error.message);
  }
};

const logController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await logService(email, password);
    res.json({ token, email });
  } catch (error) {
    res.status(401).json(error.message);
  }
};

const getCurrentUserController = async (req, res) => {
  res.json(req.token);
};

const logOut = async (req, res) => {
  console.log("trying to logout....");

  req.logout();
  res.redirect("/auth/login");
};

module.exports = {
  regController,
  logController,
  getCurrentUserController,
  logOut,
};

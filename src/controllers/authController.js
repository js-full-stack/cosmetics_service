const { User } = require("../db/authShema");
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
  const { _id } = req.user;
  const token = req.token;
  const { email } = await User.findById(_id);
  res.json({ token, email });
};

module.exports = { regController, logController, getCurrentUserController };

const { regService, logService } = require("../services/authService");

const regController = async (req, res) => {
  const { email, password } = req.body;
  await regService(email, password);
  res.json({ message: "registration success" });
};

const logController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await logService(email, password);
    console.log("token:", token);
    res.json(token);
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = { regController, logController };

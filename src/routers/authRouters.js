const express = require("express");
const router = express.Router();

const {
  regController,
  logController,
  getCurrentUserController,
} = require("../controllers/authController");

const { asyncWrapper } = require("../helpers/apiHelpers");
const { authMiddlware } = require("../helpers/authMiddlware");
router.use(authMiddlware);
router.post("/register", asyncWrapper(regController));
router.post("/login", asyncWrapper(logController));
router.get("/current", asyncWrapper(getCurrentUserController));

module.exports = { authRouter: router };

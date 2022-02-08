const express = require("express");
const router = express.Router();
const {
  regController,
  logController,
} = require("../controllers/authController");

const { asyncWrapper } = require("../helpers/apiHelpers");

router.post("/register", asyncWrapper(regController));
router.post("/login", asyncWrapper(logController));

module.exports = { authRouter: router };

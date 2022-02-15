const express = require("express");
const router = express.Router();
const guard = require("../helpers/guard");

const {
  register,
  login,

  logout,
  getCurrentUser,
} = require("../controllers/auth");

const { asyncWrapper } = require("../helpers/apiHelpers");
const { authMiddlware } = require("../helpers/authMiddlware");

router.post("/register", asyncWrapper(register));
router.post("/login", asyncWrapper(login));
router.get("/current", authMiddlware, asyncWrapper(getCurrentUser));

router.post("/logout", authMiddlware, asyncWrapper(logout));

module.exports = { authRouter: router };

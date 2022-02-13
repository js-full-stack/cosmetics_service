const express = require("express");
const router = express.Router();

const {
  regController,
  logController,
  getCurrentUserController,
  logOut,
} = require("../controllers/authController");

const { asyncWrapper } = require("../helpers/apiHelpers");
const { authMiddlware } = require("../helpers/authMiddlware");

router.post("/register", asyncWrapper(regController));
router.post("/login", asyncWrapper(logController));
router.get("/current", authMiddlware, asyncWrapper(getCurrentUserController));

router.post("/logout", authMiddlware, asyncWrapper(logOut));
router.get("/logout", function (req, res) {
  req.logout();
  res.json({
    status: "logout",
    msg: "Please Log In again",
  });
});
module.exports = { authRouter: router };

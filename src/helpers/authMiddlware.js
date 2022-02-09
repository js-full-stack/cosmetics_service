const jwt = require("jsonwebtoken");

const authMiddlware = (req, res, next) => {
  const [_, token] = req.headers.authorization?.split(" ");
  if (!token) {
    next(new Error("Please, provide a token"));
  }
  try {
    const user = jwt.decode(token, process.env.SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new Error("Invalid token"));
  }
};

module.exports = { authMiddlware };

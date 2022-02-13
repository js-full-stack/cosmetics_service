const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SECRET;

const { User } = require("../db/authShema");

const regService = async (email, password) => {
  const user = new User({ email, password });

  await user.save();
};

const logService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error(`Wrong email or password`);
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET,
    { expiresIn: "4h" }
  );
  return token;
};

// async updateToken(userId, token) {
//   const data = await User.findByIdAndUpdate(userId, { token }, { new: true })
//   if (!data) {
//     throw new CustomErr(Status.UNAUTHORIZED, 'Not authorized')
//   }
//   return data
// },

module.exports = { regService, logService };

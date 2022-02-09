const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userShema = new Schema(
  {
    email: {
      type: String,
      minlength: 5,
      maxlength: 20,
      required: [true, "Email is required"],
      unique: [true, "User with this email alredy exist"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

//* здесь происходит хеширование паролей
userShema.pre("save", async function () {
  //* если документ новый, хеширует пароль
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

const User = mongoose.model("User", userShema);

module.exports = { User };

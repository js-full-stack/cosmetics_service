const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
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
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.path("email").validate(function (value) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(value).toLowerCase());
});

userSchema.pre("save", async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10));
  }
});

const User = mongoose.model("user", userSchema);

module.exports = { User };

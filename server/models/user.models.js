const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match");
  }
  next();
});

UserSchema.pre("save", async function (next) {
  console.log("IN PRE SAVE: " + this.password);
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    console.log("Hashed Password: " + hashedPassword);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log("Error in saving: " + error);
  }
});

module.exports = mongoose.model('User', UserSchema);
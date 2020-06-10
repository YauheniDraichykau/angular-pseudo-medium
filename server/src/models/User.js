import mongoose, { Schema } from "mongoose";
import { generateHash } from "../utils";
import { isEmail } from "validator";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: "Email address is required",
      validate: [isEmail, "Invalid Email"],
      unique: true,
    },
    username: { type: String, required: "Username is required", unique: true },
    password: { type: String, required: "Password is required" },
    avatar: { type: String, default: "" },
    following: { type: Array },
    followers: { type: Array },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  user.password = await generateHash(user.password);
});

export const UserModel = mongoose.model("User", UserSchema);

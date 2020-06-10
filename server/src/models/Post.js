import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    title: { type: String, require: true },
    text: { type: String, require: true },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model("Post", PostSchema);

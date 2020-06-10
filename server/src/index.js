import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { registrationValidator, loginValidator } from "./utils/validations";
import { UserController, PostController } from "./controllers";
import { checkAuth } from "./middlewares";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(checkAuth);

mongoose.connect("mongodb://localhost:27017/candoit", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const User = new UserController();
app.get("/user/me", User.getMe);
app.post("/user/signUp", registrationValidator, User.create);
app.post("/user/signIn", loginValidator, User.login);

const Post = new PostController();
app.post("/post/create", Post.create);
app.post("/post/delete", Post.delete);
app.get("/post/getMyPosts", Post.getMyPosts);
app.get("/post/getAll", Post.getAll);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

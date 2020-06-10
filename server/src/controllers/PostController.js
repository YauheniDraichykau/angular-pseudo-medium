import bcrypt from "bcrypt";

import { PostModel } from "../models";

export class PostController {
  create = (req, res) => {
    const userId = req.user._id;

    const postData = {
      author: userId,
      title: req.body.title,
      text: req.body.text,
    };

    const post = new PostModel(postData);

    post
      .save()
      .then((obj) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json(reason);
      });
  };

  getMyPosts = (req, res) => {
    const user_id = req.user._id;
    console.log(user_id);
    PostModel.find({ author: user_id }, (err, posts) => {
      if (err) {
        return res.status(404).json({
          message: "Posts not found",
        });
      }
      res.json(posts);
    });
  };

  delete(req, res) {
    const id = req.params.id;
    PostModel.findOneAndDelete({ _id: id })
      .then((post) => {
        if (post) {
          res.json({
            message: `This post has been deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: "post not found",
        });
      });
  }

  getAll = (req, res) => {
    PostModel.find({}, (err, posts) => {
      if (err) {
        return res.status(404).json({
          message: "Posts not found",
        });
      }
      res.json(posts);
    }).populate("author");
  };
}

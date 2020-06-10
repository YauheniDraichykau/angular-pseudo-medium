import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import { UserModel } from "../models";
import { createJWToken } from "../utils";

export class UserController {
  create = (req, res) => {
    const postData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    console.log(postData);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(postData);

    user
      .save()
      .then((obj) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.status(500).json({
          status: "error",
          message: reason,
        });
      });
  };

  login(req, res) {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      if (bcrypt.compareSync(postData.password, user.password)) {
        const token = createJWToken(user);
        res.json({
          status: "success",
          token,
        });
      } else {
        res.status(403).json({
          status: "error",
          message: "incorrect password or email",
        });
      }
    });
  }

  getMe = (req, res) => {
    const id = req.user._id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.json(user);
    });
  };
}

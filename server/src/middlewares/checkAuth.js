import express from "express";
import { verifyJWToken } from "../utils";

export const checkAuth = (req, res, next) => {
  if (
    req.path === "/user/signIn" ||
    req.path === "/user/signUp" ||
    req.path === "/post/getAll"
  ) {
    return next();
  }

  const token = req.headers.token;

  verifyJWToken(token)
    .then((user) => {
      req.user = user.data._doc;
      next();
    })
    .catch((err) => {
      res.status(403).json({
        message: "Invalid auth token provided",
      });
    });
};

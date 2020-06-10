import bcrypt from "bcrypt";

export const generateHash = (password) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);

      resolve(hash);
    });
  });

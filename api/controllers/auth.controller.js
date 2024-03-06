import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === "" || email === "") {
    next(errorHandler(400, "All fields are required"));
  }

  // var salt = bcrypt.genSaltSync(10);

  var hash = bcryptjs.hashSync(password, 10);
  const newuser = new User({ username, email, password: hash });
  try {
    await newuser.save();

    res.json("Sign up successful");
  } catch (error) {
    next(error);
  }
};

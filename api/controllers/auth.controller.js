import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
// dotenv.config();
import jwt from "jsonwebtoken";
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === " " || password === " ") {
    return next(errorHandler(407, "Plese fill all details"));
  }
  try {
    const validuser = await User.findOne({ email });
    if (!validuser) {
      return ext(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validuser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }
    const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validuser._doc;
    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error)
  }
};
